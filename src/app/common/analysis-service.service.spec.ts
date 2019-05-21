import { TestBed } from '@angular/core/testing';

import { AnalysisServiceService } from './analysis-service.service';

describe('AnalysisServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnalysisServiceService = TestBed.get(AnalysisServiceService);
    expect(service).toBeTruthy();
  });
});
