import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://angular-udemy-68164.firebaseio.com/data.json', servers, {headers,});
    return this.http.put(
      'https://angular-udemy-68164.firebaseio.com/data.json',
      servers,
      {
        headers,
      }
    );
  }
  getServers() {
    return this.http.get(
      'https://angular-udemy-68164.firebaseio.com/data',
    )
      .map(
        (response: Response) => {
          const data = response.json();
          data.forEach((server) => {
            server.name = 'FETCHED_' + server.name;
          })
          return data;
        }
      )
      .catch(
        (error: Response) => {
          console.log(error);
          return Observable.throw('Something when wrong: ' + error);
        }
      );
  }
  getAppName() {
    return this.http.get('https://angular-udemy-68164.firebaseio.com/appName.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
