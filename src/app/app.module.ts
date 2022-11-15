import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdminShowComponent } from './admin/admin-show/admin-show.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ElecteurNewComponent,
    ElecteurShowComponent,
    ElecteurUpdateComponent,
    ElecteurListComponent,
    CandidatListComponent,
    CandidatNewComponent,
    CandidatUpdateComponent,
    CandidatShowComponent,
    ElecteurVoteComponent,
    AdminShowComponent,

  ],
  imports: [MatAutocompleteModule, MatProgressSpinnerModule,
    BrowserModule, MatToolbarModule,
    HttpClientModule, MatGridListModule, MatDividerModule,
    AppRoutingModule,
    FormsModule, MatIconModule,
    BrowserAnimationsModule
    , MatCardModule, MatFormFieldModule, MatButtonModule,
     MatInputModule, ReactiveFormsModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
