import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { User, UserObj } from './shared/Users';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DbClientService {
  private baseURL: string =
    'https://e-learning-project-angular-hci-default-rtdb.europe-west1.firebasedatabase.app';
  constructor(
    private httpClient: HttpClient,
    private authService: AuthenticationService,
    private router: Router
  ) {}
  signup(user: User) {
  this.httpClient.get<UserObj>(`${this.baseURL}/Users.json?orderBy="email"&equalTo="${user.email}"&limitToFirst=1`).subscribe(responseData => {
      if (responseData === null) {
        this.httpClient.post(`${this.baseURL}/Users.json`, user.getUserObj()).subscribe();
        this.authService.login();
      }
      else {
        alert("This Email is already taken!");
      }
    });
  }
  login(email: string, password: string) {
    this.httpClient
      .get<{ [key: string]: UserObj }>(
        `${this.baseURL}/Users.json?orderBy="email"&equalTo="${email}"&limitToFirst=1`
      )
      .subscribe((responseData) => {
        let id: string = Object.keys(responseData)[0];
        if (responseData[id]?.password === password) {
          this.authService.login();
          this.router.navigate(['/']);
        }
      });
  }
}
