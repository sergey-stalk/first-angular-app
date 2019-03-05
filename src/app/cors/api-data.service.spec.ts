import { ApiDataService } from '../shared/api-data.service';
import { TestBed, async, inject } from '@angular/core/testing';

describe('Service: GetAllData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiDataService],
    });
  });

  it('should ...', inject([ApiDataService], (service: ApiDataService) => {
    expect(service).toBeTruthy();
  }));
});
