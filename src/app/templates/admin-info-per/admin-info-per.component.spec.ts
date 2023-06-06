import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInfoPerComponent } from './admin-info-per.component';

describe('AdminInfoPerComponent', () => {
  let component: AdminInfoPerComponent;
  let fixture: ComponentFixture<AdminInfoPerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInfoPerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminInfoPerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
