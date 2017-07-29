import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(protected fb: FormBuilder, protected router: Router) {
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

    Parse.User.logIn(identity, password, {
      error: (user, error) => {
        console.log('error', user, error);
      }
    })
    .then(user => {
      this.router.navigate(['/dashboard']);
    });
  }

}
