import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionElectionComponent } from './inscription-election/inscription-election.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'inscription-electeur', component: InscriptionElectionComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
