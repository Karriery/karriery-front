import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilFeedbackCoachComponent } from './user-profil-feedback-coach.component';

describe('UserProfilFeedbackCoachComponent', () => {
  let component: UserProfilFeedbackCoachComponent;
  let fixture: ComponentFixture<UserProfilFeedbackCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfilFeedbackCoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfilFeedbackCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
