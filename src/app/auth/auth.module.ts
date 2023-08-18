import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { AuthService } from './auth.service';
import { HttpRequestInterceptor } from '../shared/http-request.interceptor';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [
    AuthService,
   // { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor,  multi: true},
    //{provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor,  multi: true}
    //{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { subscriptSizing: 'dynamic' }}
  ]
})
export class AuthModule { }
