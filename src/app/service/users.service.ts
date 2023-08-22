import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  WEB_URL: string = environment.serverUrl;



  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }


  login(data: any){
    console.log(data);
    
    return this.httpClient.post(this.WEB_URL + '/api/auth/login', data, this.httpOptions).pipe(
      tap(_ => console.log('USER LOGIN')),
    );
  }


}
