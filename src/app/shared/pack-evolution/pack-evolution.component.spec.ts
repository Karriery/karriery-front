import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackEvolutionComponent } from './pack-evolution.component';

describe('PackEvolutionComponent', () => {
  let component: PackEvolutionComponent;
  let fixture: ComponentFixture<PackEvolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackEvolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackEvolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
