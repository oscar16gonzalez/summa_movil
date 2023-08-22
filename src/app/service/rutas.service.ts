import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  WEB_URL: string = environment.serverUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getRutas(): Observable<any> {
    return this.httpClient.get(this.WEB_URL + '/api/rutas').pipe(
      tap(_ => console.log('DATA')),
    );
  }
  
  postRuta(ruta: any) {
    return this.httpClient.post(this.WEB_URL + '/api/rutas' , ruta, this.httpOptions).pipe(
      tap(_ => console.log('DATA')),
    );
  }
}
