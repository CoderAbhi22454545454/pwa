import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopMenuService {
  private pageTitleSubject = new BehaviorSubject<string>('');
  private transTitleSubject = new BehaviorSubject<string>('');
  private showBackArrowSubject = new BehaviorSubject<boolean>(false);
  private userNameSubject = new BehaviorSubject<string>('');
  private showUserIconSubject = new BehaviorSubject<boolean>(true);
  private showBellIconSubject = new BehaviorSubject<boolean>(true);
  private showAccountNoSubject = new BehaviorSubject<boolean>(false);

  pageTitle$ = this.pageTitleSubject.asObservable();
  transTitel$ = this.transTitleSubject.asObservable();
  showBackArrow$ = this.showBackArrowSubject.asObservable();
  userName$ = this.userNameSubject.asObservable();
  showUserIcon$ = this.showUserIconSubject.asObservable();
  showBellIcon$ = this.showBellIconSubject.asObservable();
  showAccountNo$ = this.showAccountNoSubject.asObservable();
  transTitle$: any;


  setPageTitle(title: string): void {
    this.pageTitleSubject.next(title);
  }

  setTransTitle( tTitle : string ) : void {
    this.transTitleSubject.next(tTitle)
  }

  setShowBackArrow(showBackArrow: boolean): void {
    this.showBackArrowSubject.next(showBackArrow);
  }

  setUserName(userName: string): void {
    this.userNameSubject.next(userName);
  }

  setShowUserIcon(showUserIcon: boolean): void {
    this.showUserIconSubject.next(showUserIcon);
  }

  setShowBellIcon(showBellIcon: boolean): void {
    this.showBellIconSubject.next(showBellIcon);
  }

   setShowAccountNo(showAccountNo : boolean) : void {
    this.showAccountNoSubject.next(showAccountNo)
   }

  // constructor() {}

  private skipAnimationOnHomePage: boolean = true;

  setSkipAnimationOnHomePage(skip: boolean): void {
    this.skipAnimationOnHomePage = skip;
  }

  shouldSkipAnimationOnHomePage(): boolean {
    return this.skipAnimationOnHomePage;
  }
}
