import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkComponentComponent } from './work-component.component';

describe('WorkComponentComponent', () => {
  let component: WorkComponentComponent;
  let fixture: ComponentFixture<WorkComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
