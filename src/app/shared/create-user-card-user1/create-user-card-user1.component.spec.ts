import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserCardUser1Component } from './create-user-card-user1.component';

describe('CreateUserCardUser1Component', () => {
  let component: CreateUserCardUser1Component;
  let fixture: ComponentFixture<CreateUserCardUser1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserCardUser1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserCardUser1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
