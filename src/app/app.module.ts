import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component'; 
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
 


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PassengerDashboardModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
