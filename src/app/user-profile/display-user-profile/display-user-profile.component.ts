import { Component, ViewChild } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/users/models/user.interface';

@Component({
  selector: 'app-display-user-profile',
  templateUrl: './display-user-profile.component.html',
  styleUrls: ['./display-user-profile.component.scss'],
  exportAs: 'displayUserProfile'
})
export class DisplayUserProfileComponent {

  @ViewChild(MatMenu, {static: true}) matMenu?: MatMenu
  @ViewChild(MatMenuTrigger) trigger?: MatMenuTrigger;   

  user!: User;
  
  constructor(
    private authService: AuthService){
    }

  closeUserProfile(){    
    this.trigger?.closeMenu();   
  }

  isAuthenticated(): boolean {    
    return !!this.authService.userValue;
  }
}
