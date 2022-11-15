import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidat } from 'src/app/candidat/candidat';
import { CandidatService } from 'src/app/candidat/candidat.service';
import { LocalService } from 'src/app/local.service';
import { User } from '../electeur';

@Component({
  selector: 'app-electeur-vote',
  templateUrl: './electeur-vote.component.html',
  styleUrls: ['./electeur-vote.component.css']
})
export class ElecteurVoteComponent implements OnInit {
  candidats: Candidat[] = []
  candidat: Candidat
  err: number;
  text: any

  constructor(private candidatService: CandidatService, private localStore: LocalService, private router: Router) { }

  ngOnInit(): void {
    this.candidatService.findAll().subscribe(
      (data) => {
        console.log(data);
        this.candidats = data
      },
      (err) => {
        this.err = 1;
      }
    );

    // Retrieving data:
    this.text = this.localStore.getData("currentU")
    let obj = JSON.parse(this.text);
    this.candidat.cnivotant = obj.cni
  }
  user = new User()
  tourne2 = false

  isLoading2() {
    return this.tourne2 = true
  }
  aVoter: string
  voter() {
    this.isLoading2()

    // Retrieving data:
    this.text = this.localStore.getData("currentU")
    let obj = JSON.parse(this.text);
    this.candidat.cnivotant = obj.cni
    console.log(this.candidat)
    this.candidat.nomParti = this.candidat.nom_parti
    this.candidat.nomparti = this.candidat.nom_parti
    this.candidatService.voter(this.candidat).subscribe(
      (data) => {
        console.log(data);
        if (data == "Vous avez deja voter") {
          console.log(data);
          this.aVoter = "Vous avez deja voter"
          this.tourne2 = false

        }
        else {
          console.log(data);
          this.router.navigate(['/home']).then(() => {
            //window.location.reload();
          });
        }
      },
      (err) => {
        this.err = 1;
      }
    );
  }
}
