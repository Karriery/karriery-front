import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachProfiOptimisationsCVComponent } from './coach-profi-optimisations-cv.component';

describe('CoachProfiOptimisationsCVComponent', () => {
  let component: CoachProfiOptimisationsCVComponent;
  let fixture: ComponentFixture<CoachProfiOptimisationsCVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachProfiOptimisationsCVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachProfiOptimisationsCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
