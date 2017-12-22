import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//added FormsModule and HttpModule to be in sync with tutorial
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { Assignment2Component } from './assignment2/assignment2.component';
=======
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SucessAlertComponent } from './success-alert/sucess-alert.component';
=======
import {ServerComponent} from './server/server.component';
>>>>>>> 74473fba624ce39d479a850b6ac3ccd45f08a006

>>>>>>> 25f362138c0d3ee27abd66d56a4c5acb7d04d4bf

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ServerComponent,
    ServersComponent,
    Assignment2Component
=======
    WarningAlertComponent,
    SucessAlertComponent
>>>>>>> 25f362138c0d3ee27abd66d56a4c5acb7d04d4bf
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
