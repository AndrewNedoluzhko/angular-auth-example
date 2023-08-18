import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],  
  })
export class LoginComponent {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,    
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    
  ){
    //redirect to home page if user already logged in
    if (this.authService.userValue){
      this.router.navigate(['/']);
    }
  }

  createForm(){
    this.loginForm = this.formBuilder.group({      
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(){
    this.createForm();
  }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid) return;

    this.error = '';
    this.loading = true;    
    this.authService.login(
      this.loginForm.value.email,
      this.loginForm.value.password)
      .pipe(first())
      .subscribe({
        next: ()=> { 
          const returnUrl = this.route.snapshot
            .queryParams['returnUrl'] || '/';
            this.router.navigateByUrl(returnUrl); 
        },
        error: (error) => {          
          this.error=error;
          this.errorMessage= error.error.message;
            if(error.status ===404){
              this.loginForm.controls['email'].setErrors({"notFound":true});         
              
            }else if(error.status ===401){
              this.loginForm.controls['password'].setErrors({"unauthorized":true});
            } else {
              this.loginForm.setErrors({"other": true});
              this.errorMessage='Something went wrong! Please try again later.'
            }            
          this.loading = false;
        }}
      )
  }
  onRegisterFrom(){
    this.router.navigate(['/auth/register']);
  }
}


