import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';

const AUTH_API = `${environment.BASE_URL_API}auth/`;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router
    ) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string, newsletter: boolean): Observable<any> {
    console.log('newsletter', newsletter)

    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password,
      newsletter
    }, httpOptions);
  }
}
