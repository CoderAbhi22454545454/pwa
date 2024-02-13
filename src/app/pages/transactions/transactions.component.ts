import { Component, OnInit, Renderer2 } from '@angular/core';
import { TopMenuService } from 'src/app/service/top-menu.service';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  constructor(
    private topMenuService: TopMenuService,
    private renderer: Renderer2,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.updateTitle();

    const boxes = document.querySelectorAll('.time');
    const searchTop = document.querySelector('.search-top');
    console.log(searchTop)

    const onScroll = () => {
      const scrollTop = window.scrollY;
      let currentBox: Element | null = null;
      const offset = 130;

      const searchTop = document.querySelector('.search-top') as HTMLElement; 
      boxes.forEach((box, index) => {
        const boxTop =
          box.getBoundingClientRect().top + window.scrollY - offset;
        let nextBoxTop = null;
        if (index < boxes.length - 1) {
          nextBoxTop =
            boxes[index + 1].getBoundingClientRect().top +
            window.scrollY -
            offset;
        }

        // const observer = new IntersectionObserver((entries) => {
        //   entries.forEach(entry => {
        //     if (entry.isIntersecting) {
        //       // If the element is intersecting with the viewport
        //       // Add a class to trigger the fade-in animation
        //       entry.target.classList.add('fade-in');
        //     } else {
        //       // If the element is not intersecting with the viewport
        //       // Remove the class to reset the animation
        //       entry.target.classList.remove('fade-in');
        //     }
        //   });
        // }, { threshold: 0.5 }); // Set the threshold to 0.5 to trigger the animation when at least 50% of the element is visible
        
        // // Observe the search-top element
        // observer.observe(searchTop);
        
        
        if (scrollTop > 205) {
          searchTop.classList.add('fade-in')
          // searchTop.style.display = 'block';
          searchTop.style.visibility = 'visible'
          // console.log("workiing")
        } else {
          // searchTop.classList.add('hide-search-top')
          // searchTop.style.display = 'none'
          searchTop.style.visibility = 'hidden'

        }


        if (
          scrollTop >= boxTop &&
          (nextBoxTop === null || scrollTop < nextBoxTop)
        ) {
          currentBox = box;
        }
      });

      boxes.forEach((box) => {
        if (box === currentBox) {
          this.renderer.addClass(box, 'sticky');
          // Add hide-search-top class to hide the search-top element
        } else {
          this.renderer.removeClass(box, 'sticky');
          searchTop?.classList.remove('hide-search-top'); // Remove hide-search-top class to show the search-top element
        }
      });
    };

    window.addEventListener('scroll', onScroll);

    window.addEventListener('beforeunload', () => {
      window.removeEventListener('scroll', onScroll);
    });
  }

  updateTitle(): void {
    const Title = 'Current Account';
    // this.topMenuService.setTransTitle(tTitle);
    this.topMenuService.setPageTitle(Title);
    this.topMenuService.setShowUserIcon(false);
    this.topMenuService.setShowBellIcon(false);
    this.topMenuService.setShowBackArrow(true);
    this.topMenuService.setShowAccountNo(true);
  }
  navigateBack() : void {
    this.location.back();
  }

}
