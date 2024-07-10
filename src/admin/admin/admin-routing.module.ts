import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AdultusersComponent } from './adultusers/adultusers.component';

const routes: Routes = [
  { path: 'Users', component: UsersComponent },
  { path: 'adultusers', component: AdultusersComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
