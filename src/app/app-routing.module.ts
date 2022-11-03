import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionElectionComponent } from './inscription-election/inscription-election.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionPasswordComponent } from './inscription-password/inscription-password.component';
import { ConnexionAdministrateurComponent } from './connexion-administrateur/connexion-administrateur.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';


const routes: Routes = [
  { path: 'inscription-electeur', component: InscriptionElectionComponent },
  { path: 'home', component: HomeComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription-password', component: InscriptionPasswordComponent },
  { path: 'connexion-administrateur', component: ConnexionAdministrateurComponent },
  { path: 'administrateur', component: AdministrateurComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
