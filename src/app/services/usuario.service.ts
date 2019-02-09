import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/';
import { Usuario } from '../usuario/usuario';
import { map } from 'rxjs/operators';

// import 'rxjs/add/operators/map';
// import 'rxjs/add/operators/first';
// import 'rxjs/add/operators/catchError';
// import 'rxjs/Rx';

@Injectable()
export class UsuarioService {
  private headers = new Headers({'content-Type': 'application/json'});
  private url = 'http://localhost:8000/usuario';

  constructor(private http: Http)  { }

  getUsuario(): Observable<Usuario[]> {

    let url = `${this.url}`;
    // return this.http.get(url).map(r => r.json()).catch;
    return this.http.get(this.url).pipe(map(res => res.json()));
    // .catch(this.handleError));

  }

  // private handleError(error: Response | any) {
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     let body = error.json() || '';
  //     let err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   return Observable.throw(errMsg);
  // }

}
