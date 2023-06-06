import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachProfiReunionComponent } from './coach-profi-reunion.component';

describe('CoachProfiReunionComponent', () => {
  let component: CoachProfiReunionComponent;
  let fixture: ComponentFixture<CoachProfiReunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachProfiReunionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachProfiReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
