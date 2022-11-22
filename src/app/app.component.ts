import { Component, OnInit } from '@angular/core';
import { AfterViewInit, } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as L from 'leaflet';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { VerifdoubleinscriptionComponent } from './popup/verifdoubleinscription/verifdoubleinscription.component';
import { VerifmoninscriptionComponent } from './popup/verifmoninscription/verifmoninscription.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 

  ngOnInit(): void {
    
  }
  constructor(public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(VerifdoubleinscriptionComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  openDialog1(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(VerifmoninscriptionComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
