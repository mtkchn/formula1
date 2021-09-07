import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
 
@Injectable()
export class CustomHttpInterceptorService implements HttpInterceptor {
 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({headers: request.headers.set('x-rapidapi-host', 'api-formula-1.p.rapidapi.com')});
    request = request.clone({headers: request.headers.set('x-rapidapi-key', '583d288385a7eb107d6fb4c5b7274cc9')});
 
    return next.handle(request);
 
  }
 
}