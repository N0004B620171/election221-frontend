import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Electeur } from './electeur';
import { Circonscription } from '../model/circonscription';

@Injectable({
  providedIn: 'root',
})
export class ElecteurService {

  constructor(
    public httpClient: HttpClient,
  ) { }

  findAll(): Observable<Electeur[]> {
    return this.httpClient.get<Electeur[]>(
      'http://127.0.0.1:8000/electeur/',
      {
        // headers: this.userService.autorisation(),
      }
    );
  }

  findOneById(id: number) {
    return this.httpClient.get('http://127.0.0.1:8000/electeur/' + id, {
      // headers: this.userService.autorisation(),
    });
  }
  findOneByEmail(email: string) {
    return this.httpClient.get('http://127.0.0.1:8000/electeur/chercherByEmail/' + email, {
      // headers: this.userService.autorisation(),
    });
  }

  create(electeur: Electeur) {
    return this.httpClient.post('http://127.0.0.1:8000/electeur/new', electeur, {
      //headers: this.userService.autorisation(),
    });
  }
  createCirconsctiption(circonscription: Circonscription) {
    return this.httpClient.post('http://127.0.0.1:8000/circonscription/new', circonscription, {
      //headers: this.userService.autorisation(),
    });
  }

  update(electeur: Electeur) {
    return this.httpClient.put<Electeur>(
      'http://127.0.0.1:8000/api/Electeur/' + electeur.id,
      Electeur,
      {
        // headers: this.userService.autorisation(),
      }
    );
  }

  remove(id: number) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/Electeur/' + id, {
      // headers: this.userService.autorisation(),
    });
  }
}


