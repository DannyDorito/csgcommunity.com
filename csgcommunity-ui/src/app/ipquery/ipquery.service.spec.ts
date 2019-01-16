import { TestBed } from '@angular/core/testing';

import { IPQueryService } from './ipquery.service';

describe('IpQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IPQueryService = TestBed.get(IPQueryService);
    expect(service).toBeTruthy();
  });
});
