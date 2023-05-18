import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserPersonalInformationComponent } from './create-user-personal-information.component';

describe('CreateUserPersonalInformationComponent', () => {
  let component: CreateUserPersonalInformationComponent;
  let fixture: ComponentFixture<CreateUserPersonalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserPersonalInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserPersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
