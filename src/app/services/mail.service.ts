import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const MAIL_API = `${environment.BASE_URL_API}mail/`;


@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) {}

  activateMail(token: any) {
    console.log('NEW EMAIL');
    let headers = new HttpHeaders()
    .set('Authorization', `Bearer ${token}`);
    return this.http.get(MAIL_API + 'activate', {
      observe: 'body',
      params: new HttpParams().append('token', token),
      'headers': headers
    });
    }
}
