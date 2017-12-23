import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// added FormsModule and HttpModule to be in sync with tutorial
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';

import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Assignment2Component } from './assignment2/assignment2.component';

import { Hw3Component } from './hw3/hw3.component';





@NgModule({
  declarations: [
    AppComponent,

    ServerComponent,
    ServersComponent,
    Assignment2Component,
    Hw3Component



  ],
   // added FormsModule and HttpModule to be in sync with tutorial
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
