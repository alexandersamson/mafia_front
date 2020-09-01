import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyBodyPlayersContainerPlayerComponent } from './lobby-body-players-container-player.component';

describe('LobbyBodyPlayersContainerPlayerComponent', () => {
  let component: LobbyBodyPlayersContainerPlayerComponent;
  let fixture: ComponentFixture<LobbyBodyPlayersContainerPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LobbyBodyPlayersContainerPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbyBodyPlayersContainerPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
