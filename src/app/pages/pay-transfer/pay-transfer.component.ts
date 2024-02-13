import { Component } from '@angular/core';
import { TopMenuService } from 'src/app/service/top-menu.service';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-pay-transfer',
  templateUrl: './pay-transfer.component.html',
  styleUrls: ['./pay-transfer.component.scss']
})
export class PayTransferComponent {
  constructor(private topMenuService: TopMenuService , private location: Location) {}

  ngOnInit(): void {
    const Title = 'Pay & Transfer';
    this.topMenuService.setPageTitle(Title);
    this.topMenuService.setShowBellIcon(false);
    this.topMenuService.setShowUserIcon(false);
    this.topMenuService.setShowBackArrow(true);
    // this.topMenuService.(false);
  }
  navigateBack() : void {
    this.location.back();
  }

}
