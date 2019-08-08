import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http.service';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {SearchKeyParams} from './../search-results/search-key.interface';


@Component({
  selector: 'app-single-country-view',
  templateUrl: './single-country-view.component.html',
  styleUrls: ['./single-country-view.component.css'],
  providers:[Location]
})

export class SingleCountryViewComponent implements OnInit {

  public country;
  public searchKey : SearchKeyParams;
  public searchText : String;
  public routeParams;
  
  constructor(private _route:ActivatedRoute, private router:Router,public HttpService: HttpService,private location:Location) { }

  ngOnInit() 
  {

    this.searchKey = { text:"",type:"name"};

    console.log("SEARCH_TYPE : "+this.searchKey.type)
    console.log("SEARCH_TEXT : "+this.searchKey.text)
    this.HttpService.changeMessage(this.searchKey);
    
    let name = this._route.snapshot.paramMap.get('name');
    console.log("PARAMETER : "+name);
    let country = this.HttpService.getCountry(name).subscribe(
      data=>
      {
        this.country = data;
        console.log("Showing Result For "+this.country.length);
      },
      error => {
        console.log(error.message);
      });
      
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
