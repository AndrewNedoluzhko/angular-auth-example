import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  constructor(
    private authService: AuthService,
    private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request =request.clone({
      withCredentials: true,
    })

    //skeep routes that don't need authentication checks
    if((request.url.toLowerCase().includes('/login')) ||
      (request.url.toLowerCase().includes('/logout')) ||
      (request.url.toLowerCase().includes('/register')) ||
      (request.url.toLowerCase().includes('/refresh')))
      {  
        return next.handle(request);
      } else {
        
        return next.handle(request).pipe(
          catchError((error: HttpErrorResponse) => {
            
            if(error && error.status === 401){
              
              //401 Unauthorized
              if (!this.isRefreshing){
                this.isRefreshing = true;              
                const user = this.authService.userValue;
                if (user){

                  //try to refresh access token
                  return this.authService.refresh().pipe(
                    switchMap(() => {
                      this.isRefreshing = false;
                      return next.handle(request);
                    }),
                    catchError((originalError)=> {
                      this.isRefreshing = false; 
                      //probably refresh token expired - logout
                      this.authService.logout();
                      return throwError(()=> originalError)
                    })
                  )
                } else {
                  this.isRefreshing= false;
                  return next.handle(request);
                }   
              } else {
                return next.handle(request);
              }               
            }else if(error.status === 403){
              //403 - Forbidden - move to access denied page          
              this.router.navigate(['/403']);              
              return throwError(()=> error);
            } else {
              //some another server error, move to server error page
              this.router.navigate(['server-error']);              
              return throwError(()=> error);
            }
          })
        ) as Observable<HttpEvent<any>>;
    } 
  }
}
