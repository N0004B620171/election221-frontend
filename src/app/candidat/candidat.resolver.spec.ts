import { TestBed } from '@angular/core/testing';

import { CandidatResolver } from './candidat.resolver';

describe('CandidatResolver', () => {
  let resolver: CandidatResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CandidatResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
