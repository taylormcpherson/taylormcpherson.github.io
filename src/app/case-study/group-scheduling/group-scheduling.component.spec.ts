import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSchedulingComponent } from './group-scheduling.component';

describe('GroupSchedulingComponent', () => {
  let component: GroupSchedulingComponent;
  let fixture: ComponentFixture<GroupSchedulingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSchedulingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
