import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PropertybindingComponent } from './PropertyBinding_1/propertybinding.component';
import { RenderingflowsComponent } from './RenderingFlows_2/renderingflows.component';
 

@NgModule({
  declarations: [
    AppComponent,
    PropertybindingComponent,
    RenderingflowsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
