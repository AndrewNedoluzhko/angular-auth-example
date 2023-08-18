import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  constructor(private route: ActivatedRoute,
      private router: Router,
      public authService: AuthService){
        if (this.authService.userValue)
          console.log(`NotFoundComponent user logged in`);
      }

  
  onClick(){
    if(this.authService.userValue){
      console.log(`NotFoundComponent user logged in`);
      this.router.navigate(["/"]);
    }else {
      console.log(`NotFoundComponent user NOT logged in`);
      this.router.navigate(["./login"]);
    }
  }
      
}
