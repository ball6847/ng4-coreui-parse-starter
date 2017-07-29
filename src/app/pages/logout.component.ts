import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: ''
})
export class LogoutComponent implements OnInit {
  constructor(protected router: Router) {}

  ngOnInit() {
    Parse.User.logOut()
      .then(() => this.router.navigate(['/pages/login']));
  }
}
