import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Subscription} from 'rxjs';
import {GameOverview} from '../../../../../../../models/game-models/game-overview-model';
import {GameServiceService} from '../../../../../../../services/game-service.service';

@Component({
  selector: 'app-main-controls',
  templateUrl: './main-controls.component.html',
  styleUrls: ['./main-controls.component.scss']
})
export class MainControlsComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  private gameOverview$ = new BehaviorSubject<GameOverview>(new GameOverview(null));

  get gameOverview(): GameOverview{
    return this.gameOverview$.getValue();
  }

  constructor(private gameService: GameServiceService) { }

  ngOnInit(): void {
    this.getGameOverview();
  }

  getGameOverview(): void{
    this.subscription.add(
      this.gameService.getGameOverview().subscribe(overview =>
        this.gameOverview$.next(overview))
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
