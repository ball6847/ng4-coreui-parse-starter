import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class Authenticated implements CanActivate {

  constructor(protected router: Router) { }

  canActivate() {
    const user = Parse.User.current();

    if (!user) {
      this.router.navigate(['/pages/login']);
      return false;
    }

    return true;
  }
}
