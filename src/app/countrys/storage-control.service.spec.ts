import { TestBed, async, inject } from '@angular/core/testing';
import { StorageControlService } from './storage-control.service';

describe('Service: StorageControl', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageControlService],
    });
  });

  it('should ...', inject([StorageControlService], (service: StorageControlService) => {
    expect(service).toBeTruthy();
  }));
});
