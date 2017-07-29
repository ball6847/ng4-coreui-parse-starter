import { Component, Input } from '@angular/core';
import { MenuItem, MenuSection } from '../services/menu.interface';

@Component({
  selector: 'app-menu',
  styles: [`
    .open > app-menu > ul, .open > app-menu > ol {
      max-height: 1000px !important;
    }
  `],
  template: `
    <ul [ngClass]="{'nav': !level, 'nav-dropdown-items': level}">
      <ng-container *ngFor="let item of items">
        <ng-container [ngSwitch]="item.type">
          <ng-container *ngSwitchCase="'section'">
            <li class="divider"></li>
            <li class="nav-title">{{ item.name }}</li>
          </ng-container>
          <ng-container *ngSwitchCase="'item'">
            <ng-container [ngSwitch]="item.children.length > 0">
              <ng-container *ngSwitchCase="true">
                <li class="nav-item nav-dropdown" routerLinkActive="open" appNavDropdown>
                  <a class="nav-link nav-dropdown-toggle" href="javascript:" appNavDropdownToggle><i *ngIf="item.icon" [ngClass]="item.icon"></i> {{ item.name }}</a>
                  <app-menu [items]="item.children" [level]="level+1"></app-menu>
                </li>
              </ng-container>
              <ng-container *ngSwitchCase="false">
                <li class="nav-item">
                  <a *ngIf="!item.isCallback" class="nav-link" routerLinkActive="active" [routerLink]="item.navigate"><i *ngIf="item.icon" [ngClass]="item.icon"></i> {{ item.name }}</a>
                  <a *ngIf="item.isCallback" class="nav-link" href="javascript:" (click)="item.navigate()"><i *ngIf="item.icon" [ngClass]="item.icon"></i> {{ item.name }}</a>
                </li>
              </ng-container>
            </ng-container>
          </ng-container>
        </ng-container>
      </ng-container>
    </ul>
  `
})
export class MenuComponent {
  @Input()
  items: Array<MenuItem | MenuSection>;

  @Input()
  level = 0;
}
