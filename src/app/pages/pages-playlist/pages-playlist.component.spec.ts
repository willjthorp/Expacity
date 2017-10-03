import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesPlaylistComponent } from './pages-playlist.component';

describe('PagesPlaylistComponent', () => {
  let component: PagesPlaylistComponent;
  let fixture: ComponentFixture<PagesPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
