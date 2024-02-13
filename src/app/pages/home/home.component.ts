import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { TopMenuService } from 'src/app/service/top-menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private topMenuService: TopMenuService) {}

  ngOnInit(): void {
    // Check if it's the first visit to the home page after a short delay
    setTimeout(() => {
      const isFirstVisitToHomePage = this.router.url === '/' && this.topMenuService.shouldSkipAnimationOnHomePage();

      if (isFirstVisitToHomePage) {
        // Skip animation for the first visit to the home page
        this.topMenuService.setSkipAnimationOnHomePage(false);
        // Set user name after animation (if needed)
        const userName = 'Mr. Frank Goldberg';
        this.topMenuService.setUserName(userName);
      }
    }, 100); // Adjust the delay time as needed
  }

}

