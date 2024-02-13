import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayAccountComponent } from './pay-account.component';

describe('PayAccountComponent', () => {
  let component: PayAccountComponent;
  let fixture: ComponentFixture<PayAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayAccountComponent]
    });
    fixture = TestBed.createComponent(PayAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
