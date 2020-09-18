import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCardsComponent } from './work-cards.component';

describe('WorkCardsComponent', () => {
  let component: WorkCardsComponent;
  let fixture: ComponentFixture<WorkCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
