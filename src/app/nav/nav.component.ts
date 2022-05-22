import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}
  isLoggedIn() {
    return this.authService.isLoggedIn;
  }
  logout() {
    this.authService.logout();
  }
}
