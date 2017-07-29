import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthenticatedGuard implements CanActivate {

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
