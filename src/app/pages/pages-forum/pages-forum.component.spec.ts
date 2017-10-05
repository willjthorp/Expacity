import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesForumComponent } from './pages-forum.component';

describe('PagesForumComponent', () => {
  let component: PagesForumComponent;
  let fixture: ComponentFixture<PagesForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
