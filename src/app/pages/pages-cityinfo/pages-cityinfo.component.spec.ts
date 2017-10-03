import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesCityinfoComponent } from './pages-cityinfo.component';

describe('PagesCityinfoComponent', () => {
  let component: PagesCityinfoComponent;
  let fixture: ComponentFixture<PagesCityinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesCityinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesCityinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
