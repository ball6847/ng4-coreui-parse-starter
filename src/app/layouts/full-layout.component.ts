import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { MenuItems } from '../services/menu.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
  public menuItems: Observable<MenuItems>;
  public disabled = false;
  public status: { isopen: boolean } = { isopen: false };

  constructor(protected menu: MenuService) {}

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {
    this.menuItems = this.menu.getMenuItems();
  }

}
