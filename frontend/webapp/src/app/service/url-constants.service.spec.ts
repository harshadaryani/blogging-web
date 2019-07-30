import { TestBed } from '@angular/core/testing';

import { UrlConstantsService } from './url-constants.service';

describe('UrlConstantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlConstantsService = TestBed.get(UrlConstantsService);
    expect(service).toBeTruthy();
  });
});
