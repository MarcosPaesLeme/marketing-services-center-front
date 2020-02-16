import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  public url: string = environment.url;
  // private headerL = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'x-access-token': localStorage.getItem('token').toString()
  // });

  constructor(
    private http: HttpClient
  ) { }

  public getMessage(param = {}): Observable<any>  {
    return this.http.post(this.url + 'conversation/first', param)
  }

  public sendMessage(message = {}): Observable<any> {
    return this.http.post(this.url + 'conversation/send', message);
  }

}
