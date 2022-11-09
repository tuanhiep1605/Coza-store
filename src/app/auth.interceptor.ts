import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authServices: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.authServices.isLogIn()) {
      let authRequest = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.authServices.getToken(),
        },
      });
      return next.handle(authRequest);
    }
    return next.handle(request);
  }
}
