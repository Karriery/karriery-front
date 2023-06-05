import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilInfoPerComponent } from './user-profil-info-per.component';

describe('UserProfilInfoPerComponent', () => {
  let component: UserProfilInfoPerComponent;
  let fixture: ComponentFixture<UserProfilInfoPerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfilInfoPerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfilInfoPerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
