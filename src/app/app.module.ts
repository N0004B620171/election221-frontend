import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
import { HttpClientModule } from '@angular/common/http';
import { ElecteurNewComponent } from './electeur/electeur-new/electeur-new.component';
import { ElecteurShowComponent } from './electeur/electeur-show/electeur-show.component';
import { ElecteurUpdateComponent } from './electeur/electeur-update/electeur-update.component';
import { ElecteurListComponent } from './electeur/electeur-list/electeur-list.component';
import { CandidatListComponent } from './candidat/candidat-list/candidat-list.component';
import { CandidatNewComponent } from './candidat/candidat-new/candidat-new.component';
import { CandidatUpdateComponent } from './candidat/candidat-update/candidat-update.component';
import { CandidatShowComponent } from './candidat/candidat-show/candidat-show.component';
import { ElecteurVoteComponent } from './electeur/electeur-vote/electeur-vote.component';

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
    ConnexionAdministrateurComponent,
    ElecteurNewComponent,
    ElecteurShowComponent,
    ElecteurUpdateComponent,
    ElecteurListComponent,
    CandidatListComponent,
    CandidatNewComponent,
    CandidatUpdateComponent,
    CandidatShowComponent,
    ElecteurVoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
