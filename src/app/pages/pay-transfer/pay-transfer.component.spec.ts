import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayTransferComponent } from './pay-transfer.component';

describe('PayTransferComponent', () => {
  let component: PayTransferComponent;
  let fixture: ComponentFixture<PayTransferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayTransferComponent]
    });
    fixture = TestBed.createComponent(PayTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
