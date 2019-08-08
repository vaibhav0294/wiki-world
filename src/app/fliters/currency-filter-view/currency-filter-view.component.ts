import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { HttpService } from '../../http.service';
import {SearchKeyParams} from './../../views/search-results/search-key.interface';

@Component({
  selector: 'app-currency-filter-view',
  templateUrl: './currency-filter-view.component.html',
  styleUrls: ['./currency-filter-view.component.css'],
  providers: [Location]

})
export class CurrencyFilterViewComponent implements OnInit {

  public countries;
  public searchKey : SearchKeyParams;
  public searchText : String;

  constructor(private _route: ActivatedRoute, private router: Router, public HttpService: HttpService,private location:Location) { }

  ngOnInit() {
    let currency = this._route.snapshot.paramMap.get('currency');
    this.countries = this.HttpService.getCurrencyFilteredCountries(currency).subscribe(
      data => {
        this.countries = data;
        console.log("SAME_CURRENCY_COUNTRY_LENGTH - " + this.countries.length);
      });

    this.HttpService.currentMessage.subscribe(message => {
      this.searchKey = message
      this.searchText = message.text;
      console.log("All_Country_Component SEARCH_TEXT : " + this.searchKey.text)
      console.log("All_Country_Component SEARCH_TYPE : " + this.searchKey.type)
    });
  }


  public goBackToPreviousPage()
  {
    this.location.back();
  }



}
