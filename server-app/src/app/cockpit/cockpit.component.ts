import { Component, OnInit, EventEmitter, Output, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string,serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string,serverContent: string}>();

  @ViewChild('serverContentInput',{static:true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement){
    console.log(nameInput.value);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: contentInput.value
    })
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement){
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: contentInput.value
    })
  }

}
