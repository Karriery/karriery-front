import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardKarrieryComponent } from './card-karriery.component';

describe('CardKarrieryComponent', () => {
  let component: CardKarrieryComponent;
  let fixture: ComponentFixture<CardKarrieryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardKarrieryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardKarrieryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
