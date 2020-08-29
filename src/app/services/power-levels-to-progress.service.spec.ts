import { TestBed } from '@angular/core/testing';

import { PowerLevelsToProgressService } from './power-levels-to-progress.service';

describe('PowerLevelsToProgressService', () => {
  let service: PowerLevelsToProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PowerLevelsToProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
