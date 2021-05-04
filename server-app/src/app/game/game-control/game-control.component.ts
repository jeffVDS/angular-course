import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  inc: number = 0;
  ref;

  @Output() rollEvent = new EventEmitter<{inc: number}>();
  
  constructor() { }

  ngOnInit(): void {
  }

  startGame(): void {
    this.ref = setInterval(() => {
      this.rollEvent.emit({inc:this.inc});
      this.inc++;
    },1000)
  }

  stopGame(): void{
    clearInterval(this.ref);
  }

}
