import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { DisplayUserProfileComponent } from './display-user-profile/display-user-profile.component';

@NgModule({
  declarations: [
    DisplayUserProfileComponent
  ],
  imports: [
    CommonModule,  
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,    
  ],
  exports: [
    DisplayUserProfileComponent
  ]
})
export class UserProfileModule { }
