import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient  } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { HeaderComponent } from './app-components/header/header.component';
import { UserProfileModule } from './user-profile/user-profile.module';
import { NotFoundComponent } from './app-components/error-pages/not-found/not-found.component';
import { ForbiddenComponent } from './app-components/error-pages/forbidden/forbidden.component';
import { ServerErrorComponent } from './app-components/error-pages/server-error/server-error.component';

import { NavigationAdminComponent } from './app-components/navigation-admin/navigation-admin.component';
import { NavigationUserComponent } from './app-components/navigation-user/navigation-user.component';
import { HomeComponent } from './app-components/home/home.component';
import { SideNavService } from './shared/side-nav.service';
import { HttpRequestInterceptor } from './shared/http-request.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    ForbiddenComponent,
    ServerErrorComponent,    
    NavigationAdminComponent,
    NavigationUserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,  
    AuthModule,
    UserProfileModule
  ],
  providers:
  [
    SideNavService,
    //HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
