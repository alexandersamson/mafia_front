import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyBodyPlayersContainerComponent } from './lobby-body-players-container.component';

describe('LobbyBodyPlayersContainerComponent', () => {
  let component: LobbyBodyPlayersContainerComponent;
  let fixture: ComponentFixture<LobbyBodyPlayersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LobbyBodyPlayersContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbyBodyPlayersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
