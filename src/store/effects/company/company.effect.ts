
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import * as CompanyActions from '../../actions/company/company.action';
import { CompanyService } from '../../../services/company.service';

@Injectable()
export class CompanyEffect {

  constructor(private actions$: Actions, private companyService: CompanyService) { }

  @Effect()
  public loadCompany$ = this.actions$.pipe(
    ofType(CompanyActions.LOAD_COMPANY),
    switchMap((action: any) => {
      let company = action.payload;
      return this.companyService.getCompanyInfo(company).pipe(
        map((data) => new CompanyActions.LoadCompanySuccess(data)),
        catchError(e => of(new CompanyActions.LoadCompanyFail(e)))
      );
    })
  )

  //TODO: fix on error effect (can't search again after error)
  @Effect()
  public loadCompanyFail$: Observable<any> = this.actions$.pipe(
    ofType(CompanyActions.LOAD_COMPANY_FAIL), map((err: any) => alert("There is no data for this company")))
}
