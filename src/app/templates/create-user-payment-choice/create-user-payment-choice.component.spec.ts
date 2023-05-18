import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserPaymentChoiceComponent } from './create-user-payment-choice.component';

describe('CreateUserPaymentChoiceComponent', () => {
  let component: CreateUserPaymentChoiceComponent;
  let fixture: ComponentFixture<CreateUserPaymentChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserPaymentChoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserPaymentChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
