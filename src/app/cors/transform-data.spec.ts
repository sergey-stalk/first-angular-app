/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TransformDataService } from './transform-data.service';

describe('Service: Cash', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransformDataService],
    });
  });

  it('should ...', inject([TransformDataService], (service: TransformDataService) => {
    expect(service).toBeTruthy();
  }));
});
