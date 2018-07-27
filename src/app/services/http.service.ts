import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class HttpService {
  private Url = 'https://restcountries.eu/rest/v2'

  constructor(private _http: HttpClient) {
    console.log("http service is called");
  }
  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }
  //get coutries by region
  coutriesByRegion(region): any {
    return this._http.get(`${this.Url}/region/${region}`);
  }
  //get all countries
  allCountries(): any {
    return this._http.get(`${this.Url}/all`);
  }

  //get single country
  singleCountry(country): any {
    return this._http.get(`${this.Url}/alpha/${country}`);
  }

  //language filter
  languageFilter(language): any {
    return this._http.get(`${this.Url}/lang/${language}`);
  }

  //currency filter
  currencyFilter(currency): any {
    return this._http.get(`${this.Url}/currency/${currency}`);
  }

}
