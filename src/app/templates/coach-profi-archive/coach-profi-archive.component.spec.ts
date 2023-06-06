import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachProfiArchiveComponent } from './coach-profi-archive.component';

describe('CoachProfiArchiveComponent', () => {
  let component: CoachProfiArchiveComponent;
  let fixture: ComponentFixture<CoachProfiArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachProfiArchiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachProfiArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
