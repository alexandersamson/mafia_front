import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {GameOverview} from '../../../../../../../models/game-models/game-overview-model';
import {PlayerInGameOverview} from '../../../../../../../models/player-models/player-in-game-overview.model';

@Component({
  selector: 'app-player-container',
  templateUrl: './player-container.component.html',
  styleUrls: ['./player-container.component.scss']
})
export class PlayerContainerComponent implements OnInit {
  public $playerOverview = new BehaviorSubject<PlayerInGameOverview[]>([new PlayerInGameOverview(null)]);

  @Input()
  set playerInGameOverview(value: PlayerInGameOverview[]){
    this.$playerOverview.next(value);
  }


  constructor() { }

  ngOnInit(): void {

  }

}
