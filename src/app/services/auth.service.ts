import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';

const AUTH_API = `${environment.BASE_URL_API}auth/`;
const GOOGLE_API = `${environment.BASE_URL_API}google/`;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router
    ) {}

    public isSuccessfull: boolean = false;

  googleRegister() {
    window.open('http://localhost:3000/google',"mywindow","location=1,status=1,scrollbars=1, width=800,height=800");
    let listener = window.addEventListener('message', (message) => {
    //message will contain google user and details
    if(message.data.user !== undefined) {
      this.isSuccessfull = true;
      console.log(message.data.user);
    }
  });

  }
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

  setIsSuccesfull() {
    this.isSuccessfull = true;
  }

  removeIsSuccesfull() {
    this.isSuccessfull = false;
  }
}
