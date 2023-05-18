import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCreateUserComponent } from './navbar-create-user.component';

describe('NavbarCreateUserComponent', () => {
  let component: NavbarCreateUserComponent;
  let fixture: ComponentFixture<NavbarCreateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarCreateUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarCreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
