import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProfilRedComponent } from './card-profil-red.component';

describe('CardProfilRedComponent', () => {
  let component: CardProfilRedComponent;
  let fixture: ComponentFixture<CardProfilRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProfilRedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProfilRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
