/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiDataService } from './apiData.service';

describe('Service: GetAllData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiDataService]
    });
  });

  it('should ...', inject([ApiDataService], (service: ApiDataService) => {
    expect(service).toBeTruthy();
  }));
});
