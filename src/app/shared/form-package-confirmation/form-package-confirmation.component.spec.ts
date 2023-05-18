import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPackageConfirmationComponent } from './form-package-confirmation.component';

describe('FormPackageConfirmationComponent', () => {
  let component: FormPackageConfirmationComponent;
  let fixture: ComponentFixture<FormPackageConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPackageConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPackageConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
