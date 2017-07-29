import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    protected fb: FormBuilder,
    protected router: Router,
    protected auth: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      identity: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(form: FormGroup): void  {
    const { identity, password } = form.value;

    if (!form.valid) {
      console.error("Login failed: invalid form data");
      return;
    }

    this.auth.logIn(identity, password)
      .then(() => this.router.navigate(['/dashboard']))
      .catch(error => console.error("There was an error while logging you in:", error.message));
  }
}
