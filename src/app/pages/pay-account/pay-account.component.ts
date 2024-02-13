import { Component, OnInit } from '@angular/core';
import { TopMenuService } from 'src/app/service/top-menu.service';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-pay-account',
  templateUrl: './pay-account.component.html',
  styleUrls: ['./pay-account.component.scss']
})
export class PayAccountComponent implements OnInit {

  constructor(private topMenuService : TopMenuService , private location: Location){}

  ngOnInit(): void {
    const Title = "Pay an account";
    this.topMenuService.setPageTitle(Title);
    this.topMenuService.setShowUserIcon(false);
    this.topMenuService.setShowBackArrow(true);
    this.topMenuService.setShowBellIcon(false);
    this.topMenuService.setShowAccountNo(false)
  }
  navigateBack() : void {
    this.location.back();
  }


}
