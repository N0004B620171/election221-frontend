import { Component } from '@angular/core';
import senegalData from './regiondata.json';




interface Senegal {
  
}
interface Region{}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Election221';
  senegal: Senegal[] = senegalData;
  constructor() {
    console.log(this.senegal[0])
  }
}
