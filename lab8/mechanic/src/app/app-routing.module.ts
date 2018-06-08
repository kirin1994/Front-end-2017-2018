import { AddMechanicComponent } from './add-mechanic/add-mechanic.component';
import { MechanicDetailComponent } from './mechanic-detail/mechanic-detail.component';
import { MechanicsComponent } from './mechanics/mechanics.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'mechanics', component: MechanicsComponent },
  { path: 'mechanics/:id', component: MechanicDetailComponent },
  { path: 'mechanicAdd', component: AddMechanicComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}