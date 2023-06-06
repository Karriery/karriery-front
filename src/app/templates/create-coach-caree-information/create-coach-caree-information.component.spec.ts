import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCoachCareeInformationComponent } from './create-coach-caree-information.component';

describe('CreateCoachCareeInformationComponent', () => {
  let component: CreateCoachCareeInformationComponent;
  let fixture: ComponentFixture<CreateCoachCareeInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCoachCareeInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCoachCareeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
