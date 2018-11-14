import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  count = 0;
  ref = null;

  constructor() { }

  onStartGame() {
    if (this.ref === null) {
      this.count = 1;
      this.ref = setInterval(() => {
        this.count++;
      }, 1000);
    }
  }

  onStopGame() {
    clearInterval(this.ref);
    this.ref = null;
    this.count = 0;
  }

  NumberToArray(nb) {
    return Array(nb).fill(0).map((x,i)=>i
  }

  ngOnInit() {
  }

}
