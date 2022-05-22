import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  EmailValidator,
} from '@angular/forms';
import { DbClientService } from '../db-client.service';
import { User } from '../shared/Users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../shared/login_signup.css'],
})
export class SignupComponent implements OnInit {
  public formData!: FormGroup;
  constructor(private db: DbClientService) {}

  ngOnInit(): void {
    this.formData = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(35),
        Validators.email,
      ]),
      pass: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
    });
  }
  onSubmit(): void {
    const { name, email, pass } = this.formData.value;
    this.db.signup(new User(name, email, pass));
    this.formData.setValue({
      name: '',
      email: '',
      pass: '',
    });
  }
}
