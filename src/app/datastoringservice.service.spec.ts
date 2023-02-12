import { TestBed } from '@angular/core/testing';

import { DatastoringserviceService } from './datastoringservice.service';

describe('DatastoringserviceService', () => {
  let service: DatastoringserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatastoringserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
