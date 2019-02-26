/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetAllDataService } from './getAllData.service';

describe('Service: GetAllData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllDataService]
    });
  });

  it('should ...', inject([GetAllDataService], (service: GetAllDataService) => {
    expect(service).toBeTruthy();
  }));
});
