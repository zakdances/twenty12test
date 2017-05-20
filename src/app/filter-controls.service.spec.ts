import { TestBed, inject } from '@angular/core/testing';

import { FilterControlsService } from './filter-controls.service';

describe('FilterControlsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterControlsService]
    });
  });

  it('should ...', inject([FilterControlsService], (service: FilterControlsService) => {
    expect(service).toBeTruthy();
  }));
});
