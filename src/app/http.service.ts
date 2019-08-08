import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpClientModule } from "@angular/common/http";
import {SearchKeyParams} from './views/search-results/search-key.interface'


import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/observable/throw";
@Injectable()
export class HttpService {

  public searchKey : SearchKeyParams  = {type:"name",text:""};
  
  // Data Servicesea
  public messageSource = new BehaviorSubject<SearchKeyParams>( this.searchKey);
  
  currentMessage = this.messageSource.asObservable();
  
  changeMessage(message)
  {
    this.messageSource.next(message);
  }

  public baseUrl = "https://restcountries.eu/rest/v2/";

  constructor(private _http: HttpClient) { }

  public getAllCountries(data)  {
    
    let searchKey : SearchKeyParams = {
      type : data.type,
      text : data.text
    }
    console.log("HttpService SEARCH_TEXT : "+this.searchKey.text )
    console.log("HttpService SEARCH_TYPE : "+this.searchKey.type )

    if(data.type=="name")
    {
      let allCountriesResponse = this._http.get(this.baseUrl + "name/"+ data.text).catch(this.handleError)
      return allCountriesResponse;
    }
    if(data.type=="lang")
    {
      let allCountriesResponse = this._http.get(this.baseUrl + "lang/"+ data.text).catch(this.handleError)
      return allCountriesResponse;
    }
    if(data.type=="currency")
    {
      let allCountriesResponse = this._http.get(this.baseUrl + "currency/"+ data.text).catch(this.handleError)
      return allCountriesResponse;
    }
  }


  public getAllCountriesOfRegion(regionName): any {
    console.log("REGION NAME: " + regionName);
    let allCountriesResponse = this._http.get(this.baseUrl + "region/" + regionName)
    return allCountriesResponse;
  }

  public getCountry(countryName): any {
    let countryResponse = this._http.get(this.baseUrl + "name/" + countryName + "?fullText=true");
    return countryResponse;
  }


  public getCurrencyFilteredCountries(currency): any {
    let currencyFilteredResponse = this._http.get(this.baseUrl + "currency/" + currency);
    return currencyFilteredResponse;
  }

  public getLanguagecyFilteredCountries(language): any {
    let languageFilteredResponse = this._http.get(this.baseUrl + "lang/" + language);
    return languageFilteredResponse;
  }


  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err.error instanceof Error) {

      errorMessage = `CLIENT SIDE ERROR: ${err.error.message}`;

    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      
    } // end condition *if

    console.error(errorMessage);

    return Observable.throw(errorMessage);

  }  // END handleError
}
