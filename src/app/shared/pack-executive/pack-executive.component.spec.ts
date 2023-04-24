import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackExecutiveComponent } from './pack-executive.component';

describe('PackExecutiveComponent', () => {
  let component: PackExecutiveComponent;
  let fixture: ComponentFixture<PackExecutiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackExecutiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackExecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
