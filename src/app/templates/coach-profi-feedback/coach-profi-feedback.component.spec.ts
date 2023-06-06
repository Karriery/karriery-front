import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachProfiFeedbackComponent } from './coach-profi-feedback.component';

describe('CoachProfiFeedbackComponent', () => {
  let component: CoachProfiFeedbackComponent;
  let fixture: ComponentFixture<CoachProfiFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachProfiFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachProfiFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
