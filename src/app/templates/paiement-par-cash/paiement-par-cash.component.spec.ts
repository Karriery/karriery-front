import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementParCashComponent } from './paiement-par-cash.component';

describe('PaiementParCashComponent', () => {
  let component: PaiementParCashComponent;
  let fixture: ComponentFixture<PaiementParCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementParCashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementParCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
