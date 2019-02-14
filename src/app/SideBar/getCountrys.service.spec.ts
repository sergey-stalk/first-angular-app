/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetCountrysService } from './getCountrys.service';

describe('Service: GetCountrys', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCountrysService]
    });
  });

  it('should ...', inject([GetCountrysService], (service: GetCountrysService) => {
    expect(service).toBeTruthy();
  }));
});
