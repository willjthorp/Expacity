import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesCompareComponent } from './pages-compare.component';

describe('PagesCompareComponent', () => {
  let component: PagesCompareComponent;
  let fixture: ComponentFixture<PagesCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
