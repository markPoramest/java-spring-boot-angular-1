import { TestBed } from '@angular/core/testing';

import { PMLService } from './pml.service';

describe('PMLService', () => {
  let service: PMLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PMLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
