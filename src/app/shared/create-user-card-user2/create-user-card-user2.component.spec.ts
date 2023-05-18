import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserCardUser2Component } from './create-user-card-user2.component';

describe('CreateUserCardUser2Component', () => {
  let component: CreateUserCardUser2Component;
  let fixture: ComponentFixture<CreateUserCardUser2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserCardUser2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserCardUser2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
