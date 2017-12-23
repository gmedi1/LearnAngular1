import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'The server was not created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Test Servers'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was Created, Name is' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);


  }

  onUpdateServerName(event: Event) {

    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
