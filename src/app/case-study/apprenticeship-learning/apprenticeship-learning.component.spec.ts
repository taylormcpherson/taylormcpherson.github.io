import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprenticeshipLearningComponent } from './apprenticeship-learning.component';

describe('ApprenticeshipLearningComponent', () => {
  let component: ApprenticeshipLearningComponent;
  let fixture: ComponentFixture<ApprenticeshipLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprenticeshipLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprenticeshipLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
