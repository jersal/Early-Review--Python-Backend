import { TestBed } from '@angular/core/testing';

import { CommonApiSrvService } from './common-api-srv.service';

describe('CommonApiSrvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonApiSrvService = TestBed.get(CommonApiSrvService);
    expect(service).toBeTruthy();
  });
});
