import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InscriptionElectionComponent } from './inscription-election/inscription-election.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionPasswordComponent } from './inscription-password/inscription-password.component';
import { PageElecteurComponent } from './page-electeur/page-electeur.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { ConnexionAdministrateurComponent } from './connexion-administrateur/connexion-administrateur.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionElectionComponent,
    HomeComponent,
    FooterComponent,
    ConnexionComponent,
    InscriptionPasswordComponent,
    PageElecteurComponent,
    AdministrateurComponent,
    ConnexionAdministrateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
