import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AdultusersComponent } from './adultusers/adultusers.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Users', component: UsersComponent },
  { path: 'Adultusers', component: AdultusersComponent },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
