import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-warning-alert',
  template: `
    <p title="Failed">
      Failed to complet the action
    </p>
  `,
  styles: [`
    p {
      color: #C40030;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
