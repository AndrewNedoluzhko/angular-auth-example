import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

import { User } from 'src/app/users/models/user.interface';
import { AuthService } from 'src/app/auth/auth.service';
import { DisplayUserProfileComponent } from '../../user-profile/display-user-profile/display-user-profile.component';
import { SideNavService } from '../../shared/side-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  @Output()
  open: EventEmitter<boolean> = new EventEmitter();
  @ViewChild(DisplayUserProfileComponent) displayUserProfile?: DisplayUserProfileComponent;
  public user!: User;

  constructor(
    private authService: AuthService,
    private sidenav: SideNavService,
    private router: Router
  ){}

  logout(){    
    this.authService.logout()
    .subscribe({
      next:()=>{              
      },
      error:(error)=>{        
        return throwError(() => error);
      }      
    })
    this.router.navigate(['/auth/login']);    
  }

  clickMenu() {
    this.sidenav.toggle();
  }
  clickProfile(){    
    this.displayUserProfile?.matMenu;    
  }

  isAuthenticated(): boolean {       
    if (this.authService.userValue){
      this.user = <User>this.authService.userValue;
    }     
      return !!this.authService.userValue; 
  }
  
}
