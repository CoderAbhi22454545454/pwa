import { Component, OnInit } from '@angular/core';
import { TopMenuService } from 'src/app/service/top-menu.service';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent implements OnInit {
  pageTitle: string = '';
  transTitle: string= '';
  showBackArrow: boolean = false;
  userName: string = '';
  showUserIcon: boolean = true;
  showBellIcon: boolean = true;

  constructor(private topMenuService: TopMenuService, private location: Location) {
   
  }

  ngOnInit(): void {
    this.topMenuService.pageTitle$.subscribe((title) => {
      this.pageTitle = title;
    });


    this.topMenuService.transTitel$.subscribe((tTile) => {
      this.transTitle = tTile;
    })

    this.topMenuService.userName$.subscribe((userName) => {
      this.userName = userName;
    });

    this.topMenuService.showBackArrow$.subscribe((showBackArrow) => {
      this.showBackArrow = showBackArrow;
    });

    this.topMenuService.showUserIcon$.subscribe((showuserIcon) => {
      this.showUserIcon = showuserIcon;
    });

    this.topMenuService.showBellIcon$.subscribe((showBellIcon) => {
      this.showBellIcon = showBellIcon;
    });

  }

  navigateBack() : void {
    this.location.back();
  }

}
