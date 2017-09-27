import {Injectable} from '@angular/core';
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class ServerService {

  private baseUrl: string = "https://belajar-ng-http.firebaseio.com/";

  constructor(private http: Http) {
  }

  storeServer(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'})
    return this.http.put(this.baseUrl + 'servers.json',
      servers,
      {headers: headers})
  }

  gettingServers() {
    return this.http.get('https://belajar-ng-http.firebaseio.com/servers.json').map(
      (response: Response) => {
        const data = response.json();
        return data;
      },
      (error) => {
        console.log(error)
      }
    );
  }

}
