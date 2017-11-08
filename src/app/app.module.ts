import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//added FormsModule and HttpModule to be in sync with tutorial
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
  ],
  //added FormsModule and HttpModule to be in sync with tutorial
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
