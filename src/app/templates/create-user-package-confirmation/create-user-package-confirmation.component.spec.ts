import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserPackageConfirmationComponent } from './create-user-package-confirmation.component';

describe('CreateUserPackageConfirmationComponent', () => {
  let component: CreateUserPackageConfirmationComponent;
  let fixture: ComponentFixture<CreateUserPackageConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserPackageConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserPackageConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
