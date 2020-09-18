import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseFooterComponent } from './case-footer.component';

describe('CaseFooterComponent', () => {
  let component: CaseFooterComponent;
  let fixture: ComponentFixture<CaseFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
