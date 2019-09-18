import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as CompanyAction from '../../store/actions/company/company.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss']
})
export class CompanyPageComponent implements OnInit {

  private ngUnsubscribe: Subject<void> = new Subject<void>();
  public companyData;
  
  constructor(private store: Store<any>, private router: Router) { }

  ngOnInit() {    
    this.store.select('company')
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((httpResponse) => {
        if (httpResponse && httpResponse.data) {
          this.companyData = httpResponse.data;
        }
      });
    this.store.dispatch(new CompanyAction.LoadCompany(this.router.url.split("/")[1]));
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
