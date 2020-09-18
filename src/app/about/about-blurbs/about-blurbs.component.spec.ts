import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBlurbsComponent } from './about-blurbs.component';

describe('AboutBlurbsComponent', () => {
  let component: AboutBlurbsComponent;
  let fixture: ComponentFixture<AboutBlurbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutBlurbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBlurbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
