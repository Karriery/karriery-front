import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementParVersementComponent } from './paiement-par-versement.component';

describe('PaiementParVersementComponent', () => {
  let component: PaiementParVersementComponent;
  let fixture: ComponentFixture<PaiementParVersementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementParVersementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementParVersementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
