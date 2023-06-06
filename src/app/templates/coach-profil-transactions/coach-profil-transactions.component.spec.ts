import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachProfilTransactionsComponent } from './coach-profil-transactions.component';

describe('CoachProfilTransactionsComponent', () => {
  let component: CoachProfilTransactionsComponent;
  let fixture: ComponentFixture<CoachProfilTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachProfilTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachProfilTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
