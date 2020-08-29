import { TestBed } from '@angular/core/testing';

import { DebugMessageService } from './debug-message.service';

describe('DebugMessageService', () => {
  let service: DebugMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebugMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
