import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../shared/login_signup.css']
})
export class SignupComponent implements OnInit {

  public formData!: FormGroup;
  constructor() { }
  

  ngOnInit(): void {
    this.formData = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required , Validators.maxLength(35), Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.maxLength(20)])
    });
  }

}
