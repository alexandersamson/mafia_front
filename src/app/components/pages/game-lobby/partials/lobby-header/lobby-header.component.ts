import {Component, Input, OnInit} from '@angular/core';
import {GameOverview} from '../../../../../models/game-models/game-overview-model';

@Component({
  selector: 'app-lobby-header',
  templateUrl: './lobby-header.component.html',
  styleUrls: ['./lobby-header.component.scss']
})
export class LobbyHeaderComponent implements OnInit {
  @Input() public gameOverview: GameOverview;

  constructor() { }

  ngOnInit(): void {
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
      if (this.gameOverview.currentPhase.isNight === true || this.gameOverview.currentPhase.isNight === '1'){
        return 'moon';
      }
      if (this.gameOverview.currentPhase.isNight === false || this.gameOverview.currentPhase.isNight === '0'){
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
      if (this.gameOverview.status === 'ongoing'){
        return this.gameOverview.currentPhase.name + ' ' + this.gameOverview.countDays;
      }
      return this.gameOverview.status.replace(/^\w/, chr => chr.toUpperCase());
    }
    return '...';
  }

}
