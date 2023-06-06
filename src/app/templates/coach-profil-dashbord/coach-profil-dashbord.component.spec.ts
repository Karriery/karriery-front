import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachProfilDashbordComponent } from './coach-profil-dashbord.component';

describe('CoachProfilDashbordComponent', () => {
  let component: CoachProfilDashbordComponent;
  let fixture: ComponentFixture<CoachProfilDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachProfilDashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachProfilDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
