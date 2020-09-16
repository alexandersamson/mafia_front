import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {GameOverview} from '../../../../../models/game-models/game-overview-model';
import {BehaviorSubject, Subscription} from 'rxjs';
import {GameServiceService} from '../../../../../services/game-service.service';

@Component({
  selector: 'app-lobby-header',
  templateUrl: './lobby-header.component.html',
  styleUrls: ['./lobby-header.component.scss']
})
export class LobbyHeaderComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  private gameOverview$ = new BehaviorSubject<GameOverview>(new GameOverview(null));

  set gameOverview(value){
    this.gameOverview$.next(value);
  }

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

  getGamePhaseIcon(): string{
    if (this.gameOverview && this.gameOverview.currentPhase && this.gameOverview.currentPhase.id && this.gameOverview.status){
      if (this.gameOverview.status === 'open' || this.gameOverview.status === 'paused'){
        return 'hourglass-split';
      }
      if (this.gameOverview.status === 'ended'){
        return 'check2-circle';
      }
      if (['vote', 'voteday', 'voting'].includes(this.gameOverview.currentPhase.name.toLowerCase())){
        return 'file-earmark-check-fill';
      }
      if (this.gameOverview.currentPhase.isNight === true){
        return 'moon';
      } else {
        return 'sun';
      }
    }
    return 'question-octagon';
  }

  getGameStatus(): string{
    if (this.gameOverview &&
      this.gameOverview.status &&
      this.gameOverview.currentPhase &&
      this.gameOverview.currentPhase.name) {
      if (this.gameOverview.status.toLowerCase() === 'ongoing'){
        return this.gameOverview.currentPhase.name + ' ' + this.gameOverview.countDays;
      }
      return this.gameOverview.status.replace(/^\w/, chr => chr.toUpperCase());
    }
    return '...';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.gameOverview$.unsubscribe();
  }

}
