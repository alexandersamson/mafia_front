import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStatsContainerComponent } from './game-stats-container.component';

describe('GameStatsContainerComponent', () => {
  let component: GameStatsContainerComponent;
  let fixture: ComponentFixture<GameStatsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameStatsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameStatsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
