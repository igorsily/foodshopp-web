import { Component, OnInit } from '@angular/core';
import { ROUTES } from './menu-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  showMenu = '';
  showSubMenu = '';
  public sidebarnavItems: any[];

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  
  constructor(
  ) {}
  ngOnInit() {
    this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
  }
}
