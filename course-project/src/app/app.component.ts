import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  currentTab = 'recipes';

  updateTab(tabName: string) {
    this.currentTab = tabName;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyA7YqFyLNFcZ7-iCc47dMGzt1Wpb69KeYQ",
      authDomain: "udemy-angular-recipebook-7aa39.firebaseapp.com",
    });
  }
}
