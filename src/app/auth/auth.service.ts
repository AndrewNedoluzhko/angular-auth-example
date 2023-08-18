import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '../users/models/user.interface';

const authApi = `/auth`;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<User | null>;
  private user: Observable<User | null>;

  constructor(
    private http: HttpClient,    
  ) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
  }

  register(user: User) {    
    return this.http.post<any>(`${authApi}/register`, user)
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  login(email: string, password: string) {  
    return this.http.post<any>(`${authApi}/login`, { email, password })
      .pipe(map(user => {        
        localStorage.removeItem('user');
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }))
  }

  logout(): Observable<void> {       
    this.userSubject.next(null);    
    localStorage.removeItem('user');    
    return this.http.get<any>(`${authApi}/logout`, );
  }

  refresh() {
    console.log(`authservice. refresh`);    
    return this.http.post<any>(`${authApi}/refresh`, {})
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);        
        return user;
      }));
  }
}
