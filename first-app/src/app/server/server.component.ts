import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent {
    id: number = 10;
    activated: boolean = false;

    constructor() {
        this.id = parseInt((Math.random() * 1000) + "");
        this.activated = Math.random() > 0.5;
    }

    changeStatus() {
        this.activated = !this.activated;
    }
}