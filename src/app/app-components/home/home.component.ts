import { Component, ViewChild } from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from 'src/app/auth/auth.service';
import { Role } from 'src/app/roles/models/role.interface';
import { SideNavService } from 'src/app/shared/side-nav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('sidenav', {static:true}) public sidenav!: MatSidenav;
  //role!: Role | undefined;
  roleName!: string | undefined;

  constructor(
    private authService: AuthService,
    private sideNavService: SideNavService){
      if (this.authService.userValue){
        //this.role=<Role>this.authService.userValue.role;
        this.roleName = this.authService.userValue.role?.name;
      }
    }

  ngOnInit(){
    this.sideNavService.sideNaveToggleSubject.subscribe(() =>{
      this.sidenav.toggle();
    })
  }
}
