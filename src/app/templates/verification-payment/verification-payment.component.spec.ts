import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationPaymentComponent } from './verification-payment.component';

describe('VerificationPaymentComponent', () => {
  let component: VerificationPaymentComponent;
  let fixture: ComponentFixture<VerificationPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
