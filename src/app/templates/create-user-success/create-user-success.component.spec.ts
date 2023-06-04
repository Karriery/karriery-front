import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserSuccessComponent } from './create-user-success.component';

describe('CreateUserSuccessComponent', () => {
  let component: CreateUserSuccessComponent;
  let fixture: ComponentFixture<CreateUserSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
