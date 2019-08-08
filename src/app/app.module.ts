import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { AllRegionsComponent } from './views/all-regions/all-regions.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FlitersModule } from './fliters/fliters.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ViewsModule,
    FlitersModule,
    RouterModule.forRoot
    ([
      {path:'home',component:AllRegionsComponent},
      {path:"", redirectTo:'home', pathMatch:'full'},
      {path:"*",component:AllRegionsComponent},
      {path:"**",component:AllRegionsComponent}
    
    ])
  ],
  providers : [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
