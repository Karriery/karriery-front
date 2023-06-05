import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilReunionComponent } from './user-profil-reunion.component';

describe('UserProfilReunionComponent', () => {
  let component: UserProfilReunionComponent;
  let fixture: ComponentFixture<UserProfilReunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfilReunionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfilReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
