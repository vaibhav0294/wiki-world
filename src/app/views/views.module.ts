import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleCountryViewComponent } from './single-country-view/single-country-view.component';
import { AllCountryViewComponent } from './all-country-view/all-country-view.component';
import { AllRegionsComponent } from './all-regions/all-regions.component';
import { RouterModule, Routes } from '@angular/router';
import { Browser } from 'protractor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchResultsComponent } from './search-results/search-results.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forChild
    ([
      { path: 'countries/:region', component: AllCountryViewComponent },
      { path: 'country/:name', component: SingleCountryViewComponent }
    ])

  ],
  declarations: [SingleCountryViewComponent, AllCountryViewComponent, AllRegionsComponent, SearchResultsComponent],
  exports: [SearchResultsComponent]
})
export class ViewsModule { }
