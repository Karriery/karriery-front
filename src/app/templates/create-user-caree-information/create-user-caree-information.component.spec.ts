import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserCareeInformationComponent } from './create-user-caree-information.component';

describe('CreateUserCareeInformationComponent', () => {
  let component: CreateUserCareeInformationComponent;
  let fixture: ComponentFixture<CreateUserCareeInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserCareeInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserCareeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
