import { TestBed, inject } from '@angular/core/testing';

import { CityTrailService } from './city-trail.service';

describe('CityTrailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityTrailService]
    });
  });

  it('should be created', inject([CityTrailService], (service: CityTrailService) => {
    expect(service).toBeTruthy();
  }));
});
