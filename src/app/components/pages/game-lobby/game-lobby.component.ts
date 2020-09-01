import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, pipe, Subscription} from 'rxjs';
import {PlayerContextService} from '../../../services/player-context.service';
import {mergeMap} from 'rxjs/operators';
import {GameOverview} from '../../../models/game-models/game-overview-model';

@Component({
  selector: 'app-game-lobby',
  templateUrl: './game-lobby.component.html',
  styleUrls: ['./game-lobby.component.scss']
})

export class GameLobbyComponent implements OnInit, OnDestroy{
  private subscription: Subscription = new Subscription();
  public gameOverview: GameOverview;

  constructor(private playerContext: PlayerContextService) { }

  ngOnInit(): void {
    this.startInterval();
  }

  public startInterval(): void{
    this.subscription.add(interval(1500).pipe(
      mergeMap(() => this.playerContext.getCpGameOverview()
      )).subscribe(pack => {
        if (pack && pack.data && pack.data[0]){
          this.gameOverview = new GameOverview(pack.data[0]);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
