import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserPaymentVersementComponent } from './create-user-payment-versement.component';

describe('CreateUserPaymentVersementComponent', () => {
  let component: CreateUserPaymentVersementComponent;
  let fixture: ComponentFixture<CreateUserPaymentVersementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserPaymentVersementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserPaymentVersementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
