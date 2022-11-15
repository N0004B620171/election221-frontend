import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Circonscription } from '../model/circonscription';
import { Candidat } from './candidat';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(
    public httpClient: HttpClient,
  ) { }

  findAll(): Observable<Candidat[]> {
    return this.httpClient.get<Candidat[]>(
      'http://127.0.0.1:8000/candidat/',
      {
        // headers: this.userService.autorisation(),
      }
    );
  }

  findOneById(id: number) {
    return this.httpClient.get('http://127.0.0.1:8000/candidat/' + id, {
      // headers: this.userService.autorisation(),
    });
  }


  findOneByCni(cni: string) {
    return this.httpClient.get('http://127.0.0.1:8000/electeur/chercherByCni' + cni, {
      // headers: this.userService.autorisation(),
    });
  }

  create(candidat: Candidat) {
    return this.httpClient.post('http://127.0.0.1:8000/candidat/new', candidat, {
      //headers: this.userService.autorisation(),
    });
  }

  voter(candidat: Candidat) {
    return this.httpClient.patch('http://127.0.0.1:8000/electeur/voter', candidat, {
      //headers: this.userService.autorisation(),
    });
  }
  createCirconsctiption(circonscription: Circonscription) {
    return this.httpClient.post('http://127.0.0.1:8000/circonscription/new', circonscription, {
      //headers: this.userService.autorisation(),
    });
  }

  update(candidat: Candidat) {
    return this.httpClient.put<Candidat>(
      'http://127.0.0.1:8000/api/candidat/' + candidat.id,
      candidat,
      {
        // headers: this.userService.autorisation(),
      }
    );
  }

  remove(id: number) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/candidat/' + id, {
      // headers: this.userService.autorisation(),
    });
  }
}


