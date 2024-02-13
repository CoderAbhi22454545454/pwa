import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStickyTime]'
})
export class StickyTimeDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log('Scrolling');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const nextTimeElement = this.elementRef.nativeElement.nextElementSibling;

    if (nextTimeElement) {
      const nextTimeElementOffsetTop = nextTimeElement.offsetTop;
      console.log("Next element working");

      if (scrollPosition >= nextTimeElementOffsetTop) {
        this.renderer.removeStyle(this.elementRef.nativeElement, 'position');
        console.log("Position reset");
      } else {
        this.renderer.setStyle(this.elementRef.nativeElement, 'position', 'sticky');
        this.renderer.setStyle(this.elementRef.nativeElement, 'top', '0');
        this.renderer.setStyle(this.elementRef.nativeElement, 'left', '0');
      }
    }
  }
}
