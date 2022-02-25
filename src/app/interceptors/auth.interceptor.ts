import { EMPTY, Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenStorageService: TokenStorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to api url
    const currentUser = this.tokenStorageService.getUser();
    const token = this.tokenStorageService.getToken()
    const isLoggedIn = currentUser && token;
    // const isApiUrl = request.url.startsWith(environment.APIEndpoint);
    // const requestPath: string =  request.url.split(environment.APIEndpoint)[1]
    // path should not be cancelled
    const excludedPath: Array<string> = ['/auth/login', '/auth/logout', '/auth/signup', '/mail/activate', '/mail/sendmail'];


    // let excludedPathIsPresent = false;
    // excludedPath.map((p: string) => {
    //   if (requestPath === p) {
    //     excludedPathIsPresent = true;
    //   }
    // });

    if (!currentUser) {
      return EMPTY; // cancel the current request
    }
    if (isLoggedIn) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}
