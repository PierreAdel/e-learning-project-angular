import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLoggedIn = false;
  constructor(private router:Router, private route: ActivatedRoute) {}

  login() {
    this.isLoggedIn = true;
    this.router.navigateByUrl(this.route.snapshot.queryParams['returnUrl'] || '/');
  }

  logout() {
    console.log('asd');
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}
