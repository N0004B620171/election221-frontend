import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidat } from 'src/app/candidat/candidat';
import { CandidatService } from 'src/app/candidat/candidat.service';
import { LocalService } from 'src/app/local.service';
import { AfterViewInit, } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as L from 'leaflet';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-electeur-show',
  templateUrl: './electeur-show.component.html',
  styleUrls: ['./electeur-show.component.css']
})
export class ElecteurShowComponent implements OnInit, AfterViewInit {

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
        this.candidats.forEach(element => {
          console.log(element.electeur)
        });
        this.candidats1 = this.candidats
      },
      (err) => {
        this.err = 1;
      }
    );
  }


  map: any;


  public ngAfterViewInit(): void {
    this.loadMap();
  }
  private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }

  private loadMap(): void {
    this.map = L.map('map').setView([14.5001717, -14.4392276], 7);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Election Senegal',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: environment.mapbox.accessToken,
    }).addTo(this.map);

    this.getCurrentPosition()
      .subscribe((position: any) => {

        this.map.flyTo([position.latitude, position.longitude], 7);

        const icon = L.icon({
          iconUrl: 'assets/image/marker-icon.png',
          shadowUrl: 'assets/image/marker-shadow.png',
          popupAnchor: [13, 0],
        });

        const markerThies = L.marker([14.86667, - 16.86667], { icon }).bindPopup('<h1>Thies</h1> PASTEF 186</br> BBY  81</br>PDS </br>REWMI 90</br>AAR SENEGAL 21');
        markerThies.addTo(this.map).openPopup();
        const markerDakar = L.marker([14.76667, - 17.28333], { icon }).bindPopup('<h1>Dakar</h1> PASTEF 264</br> BBY  100</br>PDS </br>REWMI 30</br>AAR SENEGAL 11');
        markerDakar.addTo(this.map).openPopup();

        const markerKaolack = L.marker([14.0, - 16.0], { icon }).bindPopup('<h1>Kaolack</h1> PASTEF 0</br> BBY  0</br>PDS 0</br>REWMI 0</br>AAR SENEGAL 0');
        markerKaolack.addTo(this.map).openPopup();
        
        const markerKolda = L.marker([13.0, - 14.41667], { icon }).bindPopup('<h1>Kolda</h1> PASTEF 0</br> BBY  0</br>PDS 0</br>REWMI 0</br>AAR SENEGAL 0');
        markerKolda.addTo(this.map).openPopup();
        
        const markerLouga = L.marker([15.41667, - 15.5], { icon }).bindPopup('<h1>Louga</h1> PASTEF 0</br> BBY  0</br>PDS 0</br>REWMI 0</br>AAR SENEGAL 0');
        markerLouga.addTo(this.map).openPopup();
        
        const markerKedougou = L.marker([12.55146, - 12.17586], { icon }).bindPopup('<h1>Kedougou</h1> PASTEF 0</br> BBY  0</br>PDS 0</br>REWMI 0</br>AAR SENEGAL 0');
        markerKedougou.addTo(this.map).openPopup();
        
        const markerKaffrine = L.marker([14.10528, - 15.54565], { icon }).bindPopup('<h1>Kafrine</h1> PASTEF 0</br> BBY  0</br>PDS 0</br>REWMI 0</br>AAR SENEGAL 0');
        markerKaffrine.addTo(this.map).openPopup();
        
        const markerFatick = L.marker([14.28333, - 16.5], { icon }).bindPopup('<h1>Fatick</h1> PASTEF 0</br> BBY  0</br>PDS 0</br>REWMI 0</br>AAR SENEGAL 0');
        markerFatick.addTo(this.map).openPopup();
        
        const markerDiourbel = L.marker([14.76667, - 16.1], { icon }).bindPopup('<h1>Diourbel</h1> PASTEF 0</br> BBY  0</br>PDS 0</br>REWMI 0</br>AAR SENEGAL 0');
        markerDiourbel.addTo(this.map).openPopup();
        
        const markerMatam = L.marker([15.16667, - 13.66667], { icon }).bindPopup('<h1>Matam</h1> PASTEF 124</br> BBY  224</br>PDS 20</br>REWMI 10</br>AAR SENEGAL 5');
        markerMatam.addTo(this.map).openPopup();
        
        const markerSedhiou = L.marker([12.70683, - 15.55801], { icon }).bindPopup('<h1>Sedhiou</h1> PASTEF 0</br> BBY  0</br>PDS 0</br>REWMI 0</br>AAR SENEGAL 0 ');
        markerSedhiou.addTo(this.map).openPopup();
        
        const markerSaintLouis = L.marker([16.33333, - 15.0], { icon }).bindPopup('<h1>Saint Louis</h1> PASTEF 0</br> BBY  0</br>PDS 0</br>REWMI 0</br>AAR SENEGAL 0 ');
        markerSaintLouis.addTo(this.map).openPopup();
        
        const markerTamba = L.marker([13.91667, - 13.25], { icon }).bindPopup('<h1>Tamba</h1> PASTEF 0</br> BBY  0</br>PDS 0</br>REWMI 0</br>AAR SENEGAL 0');
        markerTamba.addTo(this.map).openPopup();
      
        const markerZig = L.marker([12.8, - 16.36667], { icon }).bindPopup('<h1>Ziguinchor</h1> PASTEF 18</br> BBY  9</br>PDS 7</br>REWMI 5</br>AAR SENEGAL 2');
        markerZig.addTo(this.map).openPopup();
        
       
      });
      
  }


}