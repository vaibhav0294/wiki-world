import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Location } from '@angular/common'
import { ActivatedRoute, Router } from "@angular/router";
import {SearchKeyParams} from './../search-results/search-key.interface';


@Component({
  selector: 'app-all-country-view',
  templateUrl: './all-country-view.component.html',
  styleUrls: ['./all-country-view.component.css'],
  providers: [Location]

})
export class AllCountryViewComponent implements OnInit {

  public allCountries;
  public region;
  public routeParams;
  public searchKey : SearchKeyParams;
  public searchText : String;

  constructor(private _route: ActivatedRoute, private router: Router, public HttpService: HttpService, private location: Location) {
    
    this.routeParams = this._route.params.subscribe(val => {
      this.region = this._route.snapshot.paramMap.get('region');
      this.allCountries = this.HttpService.getAllCountriesOfRegion(this.region).subscribe(
        data => {
          this.allCountries = data;
          console.log("All Countries Length - " + this.allCountries.length);
          console.log("CURRENCY " + data[0].currencies[0].name);
        },
        error => {
          console.log(error.message);
        });

    });
  }

  ngOnInit() {
    this.HttpService.currentMessage.subscribe(message => {
      this.searchKey = message
      this.searchText = message.text;
      console.log("All_Country_Component SEARCH_TEXT : "+this.searchKey.text )
      console.log("All_Country_Component SEARCH_TYPE : "+this.searchKey.type )
   });

  }

  public goBackToPreviousPage()
  {
    this.location.back();
  }
}
