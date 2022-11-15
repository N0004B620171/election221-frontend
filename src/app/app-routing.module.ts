import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ElecteurNewComponent } from './electeur/electeur-new/electeur-new.component';
import { ElecteurVoteComponent } from './electeur/electeur-vote/electeur-vote.component';
import { CandidatNewComponent } from './candidat/candidat-new/candidat-new.component';
import { ElecteurShowComponent } from './electeur/electeur-show/electeur-show.component';
import { AdminShowComponent } from './admin/admin-show/admin-show.component';


const routes: Routes = [
  { path: 'electeur-new', component: ElecteurNewComponent },
  { path: 'electeur-show', component: ElecteurShowComponent },
  { path: 'admin-show', component: AdminShowComponent },
  { path: 'electeur-vote', component: ElecteurVoteComponent },
  { path: 'candidat-new', component: CandidatNewComponent, },

  { path: 'home', component: HomeComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
