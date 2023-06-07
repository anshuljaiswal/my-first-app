import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No Server was created';
  serverName: string = '';
  serverCreated: boolean = false;
  servers = ['Test','Test2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }
  ngOnInit(): void {}
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Sever was created! and name is ' + this.serverName;
  }
  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
