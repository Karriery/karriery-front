import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCareeInformationComponent } from './form-caree-information.component';

describe('FormCareeInformationComponent', () => {
  let component: FormCareeInformationComponent;
  let fixture: ComponentFixture<FormCareeInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCareeInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCareeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
