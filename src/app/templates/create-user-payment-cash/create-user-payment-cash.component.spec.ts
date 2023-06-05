import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserPaymentCashComponent } from './create-user-payment-cash.component';

describe('CreateUserPaymentCashComponent', () => {
  let component: CreateUserPaymentCashComponent;
  let fixture: ComponentFixture<CreateUserPaymentCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserPaymentCashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserPaymentCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
