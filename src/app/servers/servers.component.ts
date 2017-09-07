import { Component, OnInit } from '@angular/core';

@Component({
  // selection as HTML element
  selector: 'app-servers',
  
  // selection as HTML attribute
  // selector: '[app-servers]',

  // selection as CSS class
  // selector: '.app-servers',

  // inline template
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,

  // external template file
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'Server was not created!';
  serverName: string = 'Test Server';
  serverCreated: boolean = false;
  servers: Array<string> =  ['TestServer', 'Test Server 2'];
  
  constructor() {
    setTimeout(() => { 
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
