import { TestBed, inject } from '@angular/core/testing';
import { SpendingService } from './spending.service';

describe('SpringAsignmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpendingService]
    });
  });

  it('should be created', inject([SpendingService], (service: SpendingService) => {
    expect(service).toBeTruthy();
  }));
});
