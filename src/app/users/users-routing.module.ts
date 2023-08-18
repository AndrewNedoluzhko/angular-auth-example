import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import { UserRole } from '../roles/models/user-role.enum';
import { authGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: ListOfUsersComponent,
    canActivate: [authGuard],
    data: {userRole: UserRole.Admin},
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
