import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  constructor(private http: HttpClient) {}

  sendEmail(url: string, data: User) {
    return this.http.post(url, data);
  }
}
