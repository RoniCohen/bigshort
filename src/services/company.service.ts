import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {

  address: string;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.address = "https://company-stream.clearbit.com/v2/companies/find?domain=";
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
  }

  getCompanyInfo(companyName: string): Observable<any> {
    return this.http.get(this.address + companyName);
  }

  // TODO: save new search on DB
  
}
