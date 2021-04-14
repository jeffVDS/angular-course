import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  serverName = "";
  servers = ['TestServer','TestServer 2'];

  constructor() {
  }

  ngOnInit(): void {}

  onCreateServer(): void {
    this.servers.push(this.serverName);
  }
}
