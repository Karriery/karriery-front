import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachProfilInfoPerComponent } from './coach-profil-info-per.component';

describe('CoachProfilInfoPerComponent', () => {
  let component: CoachProfilInfoPerComponent;
  let fixture: ComponentFixture<CoachProfilInfoPerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachProfilInfoPerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachProfilInfoPerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
