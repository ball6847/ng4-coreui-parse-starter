import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(protected router: Router) { }

  logIn(username: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const handler = {
        error: (user, error) => reject(new Error(error.message))
      };

      Parse.User.logIn(username, password, handler)
        .then(user => resolve(user));
    })
  }

  logOut(): void {
    Parse.User.logOut()
      .fail(error => console.error('There was an error while logging you out: ', error))
      .then(() => this.router.navigate(['/pages/login']));
  }
}
