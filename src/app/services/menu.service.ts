import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { AuthService } from './auth.service';
import { MenuItem, MenuSection, MenuItems } from './menu.interface';


@Injectable()
export class MenuService {
  constructor(protected auth: AuthService) { }

  getMenuItems(): Observable<MenuItems> {
    const logout = () => this.auth.logOut();

    const items: MenuItems = [
      new MenuItem('Dashboard', ['/dashboard'], 'icon-speedometer'),
      new MenuSection('Extra'),
      new MenuItem('Logout', logout, 'icon-logout'),
    ];

    return Observable.of(items);
  }
}
