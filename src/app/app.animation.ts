import { trigger, animate, style, group, query, transition } from '@angular/animations';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

export const slideInAnimation = trigger('slideInAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%', zIndex: 2 }), { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })),
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' })),
      ], { optional: true }),
    ]),
  ]),
]);

export function skipAnimationOnFirstVisitToHomePage(router: Router) {
  return trigger('slideInAnimation', [
    transition('* <=> *', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%', zIndex: 2 }), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
      ]),
    ]),
    // Conditional animation based on navigation event
    transition('void => *', [
      query(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-in-out', style({ opacity: 1 })),
      ], { optional: true }),
    ]),
  ]);
}
