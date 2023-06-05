import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilCommandesComponent } from './user-profil-commandes.component';

describe('UserProfilCommandesComponent', () => {
  let component: UserProfilCommandesComponent;
  let fixture: ComponentFixture<UserProfilCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfilCommandesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfilCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
