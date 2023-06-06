import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachProfiAjouterCandidatsComponent } from './coach-profi-ajouter-candidats.component';

describe('CoachProfiAjouterCandidatsComponent', () => {
  let component: CoachProfiAjouterCandidatsComponent;
  let fixture: ComponentFixture<CoachProfiAjouterCandidatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachProfiAjouterCandidatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachProfiAjouterCandidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
