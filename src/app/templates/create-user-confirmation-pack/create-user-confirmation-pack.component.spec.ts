import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserConfirmationPackComponent } from './create-user-confirmation-pack.component';

describe('CreateUserConfirmationPackComponent', () => {
  let component: CreateUserConfirmationPackComponent;
  let fixture: ComponentFixture<CreateUserConfirmationPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserConfirmationPackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserConfirmationPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
