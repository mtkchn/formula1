import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CustomHttpInterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // request = request.clone({headers: request.headers.set("Access-Control-Allow-Origin", "*")});

    request = request.clone({ headers: request.headers.set('x-rapidapi-host', 'api-formula-1.p.rapidapi.com') });
    request = request.clone({ headers: request.headers.set('x-rapidapi-key', '9b8c96ae681780b75d173fa947d0ebdb') });

    return next.handle(request);

  }

}