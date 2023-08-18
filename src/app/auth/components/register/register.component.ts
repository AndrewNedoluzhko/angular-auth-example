import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/users/models/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  currentForm!: FormGroup;
  loading = false;
  submitted = false;
  numericPattern: string = '^[0-9]';
  error= '';
  errorMessage = '';
  excistedEmail = false;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ){ }

  createForm(){
    this.currentForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phoneNumber: ['', [Validators.minLength(11), Validators.maxLength(14), Validators.required, Validators.pattern('[0-9]*'),]],      
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void{    
    this.createForm();
  }
 
  get emailControl(){
    return this.currentForm.get('email');
  }

  onSubmit(){
    this.submitted = true;
    if(this.currentForm.invalid) return;
    this.loading = true;
    const user: User = {
      firstname: this.currentForm.value.firstname,
      lastname: this.currentForm.value.lastname,
      phoneNumber: this.currentForm.value.phoneNumber,
      email: this.currentForm.value.email,
      password: this.currentForm.value.password,
    }

    this.authService.register(user)
      .subscribe({
        next: ()=> {
          const returnUrl = this.route.snapshot
            .queryParams['returnUrl'] || '/';
            this.router.navigateByUrl(returnUrl);            
        },
        error: error => {
          this.loading = false;
          if (error.status ===409){
            this.currentForm.controls['email'].setErrors({"conflict": true});
            this.currentForm.invalid;
            this.errorMessage = error.error.message;
          } else {
            this.errorMessage = 'Unexpected error occurred';
          }
        }
      });
  }
  onLoginForm(){
    this.router.navigate(['/auth/login']);
  }
}

