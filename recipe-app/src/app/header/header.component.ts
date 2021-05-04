import {EventEmitter, Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Output() headerClickEvent = new EventEmitter<{elementClicked:string}>();

  collapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  onElementClick(eClicked:string){
    this.headerClickEvent.emit({
      elementClicked : eClicked
    });
  }

}
