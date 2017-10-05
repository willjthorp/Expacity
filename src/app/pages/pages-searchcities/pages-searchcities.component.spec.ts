import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSearchcitiesComponent } from './pages-searchcities.component';

describe('PagesSearchcitiesComponent', () => {
  let component: PagesSearchcitiesComponent;
  let fixture: ComponentFixture<PagesSearchcitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesSearchcitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSearchcitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
