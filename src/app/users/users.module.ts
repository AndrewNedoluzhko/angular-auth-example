import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import { MaterialModule } from '../material.module';
import { UsersService } from './users.service';


@NgModule({
  declarations: [
    ListOfUsersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UsersRoutingModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
