import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, pipe, Subscription} from 'rxjs';
import {PlayerContextService} from '../../../services/player-context.service';
import {mergeMap, startWith} from 'rxjs/operators';
import {GameOverview} from '../../../models/game-models/game-overview-model';
import {GameServiceService} from '../../../services/game-service.service';

@Component({
  selector: 'app-game-lobby',
  templateUrl: './game-lobby.component.html',
  styleUrls: ['./game-lobby.component.scss']
})

export class GameLobbyComponent implements OnInit, OnDestroy{
  constructor(private playerContext: PlayerContextService, private gameService: GameServiceService) {
  }

  ngOnInit(): void {
    this.gameService.startGameOverViewInterval();
  }

  ngOnDestroy(): void {
    this.gameService.stopGameViewInterval();
  }

}
