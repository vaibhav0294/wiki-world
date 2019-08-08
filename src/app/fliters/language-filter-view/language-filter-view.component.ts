import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../http.service';
import { SearchKeyParams } from './../../views/search-results/search-key.interface';

@Component({
  selector: 'app-language-filter-view',
  templateUrl: './language-filter-view.component.html',
  styleUrls: ['./language-filter-view.component.css'],
  providers: [Location]

})
export class LanguageFilterViewComponent implements OnInit {

  public countries;
  public searchKey: SearchKeyParams;
  public searchText: String;

  constructor(private _route: ActivatedRoute, private router: Router, public HttpService: HttpService,private location:Location) { }

  ngOnInit() {
    let language = this._route.snapshot.paramMap.get('language');
    this.countries = this.HttpService.getLanguagecyFilteredCountries(language).subscribe(
      data => {
        this.countries = data;
        console.log("SAME_Language_COUNTRY_LENGTH - " + this.countries.length);
      });

    this.HttpService.currentMessage.subscribe(message => {
      this.searchKey = message
      this.searchText = message.text;
      console.log("All_Country_Component SEARCH_TEXT : " + this.searchKey.text)
      console.log("All_Country_Component SEARCH_TYPE : " + this.searchKey.type)
    });

  }
  public goBackToPreviousPage() {
    this.location.back();
  }

}
