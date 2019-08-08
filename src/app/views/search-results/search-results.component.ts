import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import {SearchKeyParams} from './../search-results/search-key.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  public searchKey : SearchKeyParams;
  public searchText: String;
  public searchType : String;
  public length: any;
  public allCountriesList: any;
  public error: String = "Loading.......";

  constructor(private data: HttpService) { }

  ngOnInit() {

    this.data.currentMessage.subscribe(message => {
      this.searchKey = message;
      this.searchText = message.text;
      console.log("Search Results : " + message.text)
      if (message.text != "") {
        this.allCountriesList = this.data.getAllCountries(message).subscribe(
          (data1) => {
            this.allCountriesList = data1;
            this.length = this.allCountriesList.length;
            console.log("All Countries Length - " + this.allCountriesList.length);
          },(err) =>
            {
              this.error = "Not Found";
            }
          );
      }
    });
  }

  

}
