import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateGraphComponent } from './climate-graph.component';

describe('ClimateGraphComponent', () => {
  let component: ClimateGraphComponent;
  let fixture: ComponentFixture<ClimateGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimateGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimateGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
