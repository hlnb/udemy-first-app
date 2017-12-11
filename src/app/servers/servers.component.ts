import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  //selector: '[app-servers]' as an attribute
  // selector: '.app-servers' as a class
  //template: `
  // <app-server></app-server>
  // <app-server></app-server>`
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreationStatus = 'Server was created' + this.serverName;
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;

  }
}
