import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidat } from 'src/app/candidat/candidat';
import { CandidatService } from 'src/app/candidat/candidat.service';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-electeur-show',
  templateUrl: './electeur-show.component.html',
  styleUrls: ['./electeur-show.component.css']
})
export class ElecteurShowComponent implements OnInit {

  candidats: Candidat[] = []
  candidat: Candidat
  err: number;
  text: any
  candidats1: Candidat[];
  constructor(private candidatService: CandidatService, private localStore: LocalService, private router: Router) { }

  ngOnInit(): void {
    this.candidatService.findAll().subscribe(
      (data) => {
        console.log(data);
        this.candidats = data
        this.candidats1 = this.candidats
      },
      (err) => {
        this.err = 1;
      }
    );
  }
}