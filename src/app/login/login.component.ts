import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../shared/login_signup.css']
})
export class LoginComponent implements OnInit {

  public formData!: FormGroup;
  constructor() { }
  

  ngOnInit(): void {
    this.formData = new FormGroup({
      email: new FormControl('', [Validators.required , Validators.maxLength(35), Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.maxLength(20)])
    });
  }

}
