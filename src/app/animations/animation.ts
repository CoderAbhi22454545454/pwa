import { trigger, transition, style, query, animate } from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('* => *', [
    query(':enter', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        opacity: 0
      })
    ], { optional: true }), // Use optional query for :enter
    query(':leave', [
      animate('300ms ease', style({ opacity: 0 }))
    ], { optional: true }), // Use optional query for :leave
    query(':enter', [
      animate('300ms ease', style({ opacity: 1 }))
    ])
  ])
]);
