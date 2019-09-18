import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyReducer } from '../../src/store/reducers/company/company.reducer';
import { CompanyEffect } from '../../src/store/effects/company/company.effect';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../../src/services/token.interceptor';
import { CompanyDataComponent } from './company-data/company-data.component';
import { CompanyPageComponent } from './company-page/company-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyFormComponent,
    CompanyDataComponent,
    CompanyPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      company: CompanyReducer,
    }),
    EffectsModule.forRoot([CompanyEffect]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
