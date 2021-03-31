import { TestBed } from '@angular/core/testing';

import { TextifyService } from './textify.service';

describe('TextifyService', () => {
  let service: TextifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
