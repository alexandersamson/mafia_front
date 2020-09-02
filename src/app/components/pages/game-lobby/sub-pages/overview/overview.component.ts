import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {GameOverview} from '../../../../../models/game-models/game-overview-model';
import {PlayerContextService} from '../../../../../services/player-context.service';
import {mergeMap, startWith} from 'rxjs/operators';
import {PlayerInGameOverview} from '../../../../../models/player-models/player-in-game-overview.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy{
  private subscription: Subscription = new Subscription();
  public playerInGameOverview: PlayerInGameOverview[] = [];

  constructor(private playerContext: PlayerContextService) { }

  ngOnInit(): void {
    this.startInterval();
  }

  public startInterval(): void{
    this.subscription.add(interval(1500).pipe(startWith(0),
      mergeMap(() => this.playerContext.getCpPlayersOverview()
      )).subscribe(pack => {
        if (pack && pack.data){
          pack.data.forEach((x, y) => this.playerInGameOverview[y] = new PlayerInGameOverview(x));
        }
        this.playerInGameOverview.sort((a, b) => (a.isAlive === b.isAlive) ? 0 : a.isAlive ? -1 : 1);
        this.playerInGameOverview.sort((a, b) => (a.isHost === b.isHost) ? 0 : a.isHost ? -1 : 1);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
