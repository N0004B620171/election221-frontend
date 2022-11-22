import { Component, OnInit } from '@angular/core';
import { ElecteurService } from 'src/app/electeur/electeur.service';

@Component({
  selector: 'app-verifmoninscription',
  templateUrl: './verifmoninscription.component.html',
  styleUrls: ['./verifmoninscription.component.css']
})
export class VerifmoninscriptionComponent implements OnInit {

  ok2: any
  ok1: any
  cni: any
  tourne2: any
  err: number;
  currentElecteur: any;
  constructor(private electeurService: ElecteurService) { }

  ngOnInit(): void {
  }
  VerifDouble() {
    this.electeurService.findOneByCni(this.cni).subscribe(
      (data) => {
        console.log(data);
        this.currentElecteur = data
        if (this.currentElecteur==null) {
          this.ok2 = true
          this.ok1 = false
        } else {
          this.ok1 = true
          this.ok2 = false

        }
      },
      (err) => {
        this.err = 1;

      }
    );
  }
}
