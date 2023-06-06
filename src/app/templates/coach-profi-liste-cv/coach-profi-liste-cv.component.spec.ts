import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachProfiListeCvComponent } from './coach-profi-liste-cv.component';

describe('CoachProfiListeCvComponent', () => {
  let component: CoachProfiListeCvComponent;
  let fixture: ComponentFixture<CoachProfiListeCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachProfiListeCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachProfiListeCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
