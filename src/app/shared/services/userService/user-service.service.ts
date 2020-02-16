import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  public url: string = environment.url;
  private headerL: any = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    private http: HttpClient
  ) { }
  
  public login(credentials:any = {}): Observable<any> {
    return this.http.post(this.url + 'user/authenticate', credentials);
  }

  public registerUser(credentials = {}): Observable<any> {
    return this.http.post(this.url + 'user', credentials);
  }

}
