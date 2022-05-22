import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authService: AuthenticationService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let path = route.url[0].path;
    let res:boolean = path == 'login' || path == 'signup'
      ? !this.authService.isLoggedIn
      : this.authService.isLoggedIn;
    if (!res) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    }
      return res;
  }
}
