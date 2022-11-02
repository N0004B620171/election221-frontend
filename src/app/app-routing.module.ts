import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionElectionComponent } from './inscription-election/inscription-election.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';


const routes: Routes = [
  { path: 'inscription-electeur', component: InscriptionElectionComponent },
  { path: 'home', component: HomeComponent },
  { path: 'connexion', component: ConnexionComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
