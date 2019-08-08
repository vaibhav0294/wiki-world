import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import {SearchKeyParams} from './views/search-results/search-key.interface'

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent
{

  title = 'app';
  public _searchText : String = ""; 
  public searchType : String = "name"; 
  public searchPlaceHolder : String = "Search by country name";
  public searchKey : SearchKeyParams = {type:"name",text:""};

  constructor(private data:HttpService){}

  get searchText() : String
  {
    return this._searchText;
  }

  set searchText(value :  String)
  {
    this._searchText = value;
    this.searchKey.text = value;
    console.log("SEARCH_TYPE : "+this.searchKey.type)
    console.log("SEARCH_TEXT : "+this.searchKey.text)
    this.data.changeMessage(this.searchKey);
  }

  setSearchType(searchType:String)
  {
    this.searchKey.type = searchType;
    this.searchPlaceHolder ="Search by "+searchType;
    
  }
}