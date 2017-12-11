import { Component } from '@angular/core';
//decorator
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
//class
export class ServerComponent {
    serverId: number= 10;
    serverStatus: string = "offline";

}