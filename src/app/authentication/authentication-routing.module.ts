import { LoginComponent } from './../components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';


const routes: Routes=[
  {
    path:'', component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AuthenticationRoutingModule { }
