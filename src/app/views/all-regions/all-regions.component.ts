import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import {SearchKeyParams} from './../search-results/search-key.interface';


@Component({
  selector: 'app-all-regions',
  templateUrl: './all-regions.component.html',
  styleUrls: ['./all-regions.component.css']
})
export class AllRegionsComponent implements OnInit {

  public searchKey : SearchKeyParams;
  public searchText : String;
  constructor(private data:HttpService) { }

  
  ngOnInit() 
  {
     this.data.currentMessage.subscribe(message => {
        this.searchKey = message
        this.searchText = message.text;
        console.log("AllRegionComponent SEARCH_TEXT : "+this.searchKey.text )
        console.log("AllRegionComponent SEARCH_TYPE : "+this.searchKey.type )
     });
  }

}
