import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesToptensComponent } from './pages-toptens.component';

describe('PagesToptensComponent', () => {
  let component: PagesToptensComponent;
  let fixture: ComponentFixture<PagesToptensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesToptensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesToptensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
