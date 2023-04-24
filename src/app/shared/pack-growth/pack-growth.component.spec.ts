import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackGrowthComponent } from './pack-growth.component';

describe('PackGrowthComponent', () => {
  let component: PackGrowthComponent;
  let fixture: ComponentFixture<PackGrowthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackGrowthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
