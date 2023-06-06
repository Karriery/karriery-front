import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCoachVerifComponent } from './create-coach-verif.component';

describe('CreateCoachVerifComponent', () => {
  let component: CreateCoachVerifComponent;
  let fixture: ComponentFixture<CreateCoachVerifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCoachVerifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCoachVerifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
