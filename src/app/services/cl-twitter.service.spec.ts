import { TestBed } from '@angular/core/testing';

import { ClTwitterService } from './cl-twitter.service';

describe('ClTwitterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClTwitterService = TestBed.get(ClTwitterService);
    expect(service).toBeTruthy();
  });
});
