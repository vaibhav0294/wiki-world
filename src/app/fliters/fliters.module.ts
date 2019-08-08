import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CurrencyFilterViewComponent } from './currency-filter-view/currency-filter-view.component';
import { LanguageFilterViewComponent } from './language-filter-view/language-filter-view.component';
import { ViewsModule } from '../views/views.module';
@NgModule
({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ViewsModule,
    RouterModule.forChild
      ([
        { path: 'currencyFilteredView/:currency', component: CurrencyFilterViewComponent },
        { path: 'langugeFilteredView/:language', component: LanguageFilterViewComponent }
      ])

  ],
  declarations: [CurrencyFilterViewComponent, LanguageFilterViewComponent]
})
export class FlitersModule { }
