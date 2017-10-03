import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSignupComponent } from './pages-signup.component';

describe('PagesSignupComponent', () => {
  let component: PagesSignupComponent;
  let fixture: ComponentFixture<PagesSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
