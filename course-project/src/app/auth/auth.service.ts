import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  token: string;

  constructor(private route: Router) {}

  signupUser(email: string, pw: string) {
    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, pw)
      .catch(
        error => console.log('SignUp - Error:', error)
      )
  }

  signinUser(email: string, pw: string) {
    firebase.auth().signInWithEmailAndPassword(email, pw)
      .then(
        response => {
          this.route.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            )
        }
      )
      .catch(
        error => console.log('SignIn - Error:', error)
      )
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

}
