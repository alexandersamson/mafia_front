import { TestBed } from '@angular/core/testing';

import { PlayerCookiesService } from './player-cookies.service';

describe('PlayerCookiesService', () => {
  let service: PlayerCookiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerCookiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
