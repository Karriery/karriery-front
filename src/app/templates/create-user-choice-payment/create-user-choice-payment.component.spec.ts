import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserChoicePaymentComponent } from './create-user-choice-payment.component';

describe('CreateUserChoicePaymentComponent', () => {
  let component: CreateUserChoicePaymentComponent;
  let fixture: ComponentFixture<CreateUserChoicePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserChoicePaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserChoicePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
