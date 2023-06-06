import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCoachSuccessComponent } from './create-coach-success.component';

describe('CreateCoachSuccessComponent', () => {
  let component: CreateCoachSuccessComponent;
  let fixture: ComponentFixture<CreateCoachSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCoachSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCoachSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
