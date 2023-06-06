import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListeComponent } from './admin-liste.component';

describe('AdminListeComponent', () => {
  let component: AdminListeComponent;
  let fixture: ComponentFixture<AdminListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
