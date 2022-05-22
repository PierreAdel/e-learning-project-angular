import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLoggedIn = false;
  constructor(private router: Router) {}

  login() {
    this.isLoggedIn = true;
    this.router.navigate(['/']);
  }

  logout() {
    console.log('asd');
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}
