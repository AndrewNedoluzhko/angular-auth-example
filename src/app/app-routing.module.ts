import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { HomeComponent } from './app-components/home/home.component';
import { authGuard } from './auth/guards/auth.guard';
import { NotFoundComponent } from './app-components/error-pages/not-found/not-found.component';
import { ForbiddenComponent } from './app-components/error-pages/forbidden/forbidden.component';
import { ServerErrorComponent } from './app-components/error-pages/server-error/server-error.component';
import { UserRole } from './roles/models/user-role.enum';


const routes: Routes = [
  {
    path: 'auth', 
    children: [       
      {
        path: 'register', component: RegisterComponent
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: '',  redirectTo: '/auth/login', pathMatch: 'full'
      }      
    ]
  }, 
  {
    path: '', component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    // load paths for admin role
    path: '', component: HomeComponent,
    canActivate: [authGuard],
    children: [
      {
      path: 'users', 
      loadChildren: ()=> import('./users/users.module').then(mod=>mod.UsersModule),
      canActivate: [authGuard],
      data: {userRole: UserRole.Admin},      
    },
    {
      // load path for user role
      path: '', component: HomeComponent,
      canActivate: [authGuard],
      data: {userRole: ["User"]},   
    },
    ]   
  },  
  {
    path: '403', component: ForbiddenComponent
  },
  {
    path: 'server-error', component: ServerErrorComponent
  },
  {
    path: '**', component: NotFoundComponent
  },   
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
 
  ]
})
export class AppRoutingModule { }


