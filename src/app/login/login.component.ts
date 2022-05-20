import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DbClientService } from '../db-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../shared/login_signup.css']
})
export class LoginComponent implements OnInit {

  public formData!: FormGroup;
  constructor(private db:DbClientService) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      email: new FormControl('', [Validators.required , Validators.maxLength(35), Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.maxLength(20)])
    });
  }
  onSubmit(): void {
    const{name,email,pass}=this.formData.value
    this.db.login(email,pass);
  }
}
