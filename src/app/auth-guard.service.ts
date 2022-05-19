import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthenticationService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let path = route.url[0].path;
    return path == 'login' || path == 'signup'
      ? !this.authService.isLoggedIn
      : this.authService.isLoggedIn;
  }
}
