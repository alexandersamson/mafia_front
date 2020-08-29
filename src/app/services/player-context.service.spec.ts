import { TestBed } from '@angular/core/testing';

import { PlayerContextService } from './player-context.service';

describe('PlayerContextService', () => {
  let service: PlayerContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
