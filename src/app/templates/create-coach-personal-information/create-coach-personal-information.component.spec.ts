import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCoachPersonalInformationComponent } from './create-coach-personal-information.component';

describe('CreateCoachPersonalInformationComponent', () => {
  let component: CreateCoachPersonalInformationComponent;
  let fixture: ComponentFixture<CreateCoachPersonalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCoachPersonalInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCoachPersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
