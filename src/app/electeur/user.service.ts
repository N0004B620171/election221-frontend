import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './electeur';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public loggedUser: string;
  public isloggedIn: Boolean = false;
  apiURL: string = 'http://127.0.0.1:8000/api/login_check';
  token: string | null;
  constructor(private router: Router, private http: HttpClient) { }
  login(user: any) {
    return this.http.post<any>(this.apiURL, user, {
      observe: 'response',
    });
  }
  register(user: User) {
    return this.http.post<User>(this.apiURL + '/register', user, {
      observe: 'response',
    });
  }
  saveToken(jwt: string) {
    console.log(jwt);

    localStorage.setItem('jwt', jwt);
    localStorage.setItem('isloggedIn', 'true');
    this.token = jwt;

    this.isloggedIn = true;
  }
  loadToken() {
    this.token = localStorage.getItem('jwt');
  }
  getToken(): string |null{
    this.loadToken();
    return this.token;
  }
  autorisation() {
    let jwt = this.getToken();
    jwt = 'Bearer ' + jwt;
    return new HttpHeaders({ Authorization: jwt });
  }
  currentUser() {
    return this.http.get<User>('http://127.0.0.1:8000/api/user', {
      headers: this.autorisation(),
    });
  }

  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('isloggedIn');
  }
}
