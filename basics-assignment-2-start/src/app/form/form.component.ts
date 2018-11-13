import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  username = '';

  constructor() { }

  ngOnInit() {
  }

  isValidInput() {
    return this.username !== '';
  }

  sendInput() {
    this.username = '';
  }
}
