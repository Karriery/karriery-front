import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachProfiListeFeedbacksComponent } from './coach-profi-liste-feedbacks.component';

describe('CoachProfiListeFeedbacksComponent', () => {
  let component: CoachProfiListeFeedbacksComponent;
  let fixture: ComponentFixture<CoachProfiListeFeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachProfiListeFeedbacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachProfiListeFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
