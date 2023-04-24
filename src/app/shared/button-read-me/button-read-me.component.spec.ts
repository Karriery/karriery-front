import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonReadMeComponent } from './button-read-me.component';

describe('ButtonReadMeComponent', () => {
  let component: ButtonReadMeComponent;
  let fixture: ComponentFixture<ButtonReadMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonReadMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonReadMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
