import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, 
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { APISettings } from './api.settings';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
 
  constructor() {}

  intercept(
    request: HttpRequest<any>, 
    next: HttpHandler
    ): Observable<HttpEvent<any>> 
  {    
    const modifiedRequest = request.clone({
      url: `${APISettings.API_ENDPOINT}${request.url}`,
    });
    const finalRequest = modifiedRequest.clone(APISettings.httpOptions);    
    return next.handle(finalRequest);
  }
}
