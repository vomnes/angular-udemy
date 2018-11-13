import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  isVisible = false;
  logs = [];

  constructor() { }

  ngOnInit() {
  }

  toggleText() {
    this.isVisible = !this.isVisible;
    this.logs.push({
      updatedAt: new Date();
    })
  }
}
