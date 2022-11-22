import { Component, OnInit } from '@angular/core';
import { ElecteurService } from 'src/app/electeur/electeur.service';

@Component({
  selector: 'app-verifdoubleinscription',
  templateUrl: './verifdoubleinscription.component.html',
  styleUrls: ['./verifdoubleinscription.component.css']
})
export class VerifdoubleinscriptionComponent implements OnInit {
  ok1:any
  ok2:any
  cni:any
tourne2:any
  currentElecteur: any;
  err: number;
  constructor(private electeurService: ElecteurService) { }

  ngOnInit(): void {
  }
  VerifDouble() {
    this.electeurService.findOneByCni(this.cni).subscribe(
      (data) => {
        console.log(data);
        this.currentElecteur = data
        if (this.currentElecteur == null) {
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
