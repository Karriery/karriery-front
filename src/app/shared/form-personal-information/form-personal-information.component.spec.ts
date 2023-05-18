import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPersonalInformationComponent } from './form-personal-information.component';

describe('FormPersonalInformationComponent', () => {
  let component: FormPersonalInformationComponent;
  let fixture: ComponentFixture<FormPersonalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPersonalInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
