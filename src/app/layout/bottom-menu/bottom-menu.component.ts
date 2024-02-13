import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.scss']
})
export class BottomMenuComponent {
  

  constructor(private router: Router) { }

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
}
