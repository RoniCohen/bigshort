import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as CompanyAction from '../../store/actions/company/company.action';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit, OnDestroy {

  public companyData;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private store: Store<any>) { }

  ngOnInit() {

  }

  getCompanyInfo(companyName: string) {
    this.store.select('company')
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((httpResponse) => {
        if (httpResponse && httpResponse.data) {
          this.companyData = httpResponse.data;
        }
      });
    this.store.dispatch(new CompanyAction.LoadCompany(companyName));
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
