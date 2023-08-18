import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './../auth.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot) => {

  const router: Router = inject(Router);
  const authService: AuthService = inject(AuthService);
  const user = authService.userValue;

  if (user){
    const role = route.data?.userRole;
    if (role && user.role?.name !== role){
      router.navigate(['/403']);      
      return false
    }   
    return true;
  } else {
    router.navigate(['/auth/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }  
};
