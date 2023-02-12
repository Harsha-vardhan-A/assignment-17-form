import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { DisplayComponent } from './display/display.component';
const routes: Routes = [
  {path:'display', component: DisplayComponent},
  {path:'' , component: RegistrationformComponent},
  {path:'**', component: RegistrationformComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
