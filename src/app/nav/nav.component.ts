import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private authService: AuthenticationService, public  loaderService:LoaderService) {}

  ngOnInit(): void {}
  isLoggedIn() {
    return this.authService.isLoggedIn;
  }
  logout() {
    this.authService.logout();
  }
}
