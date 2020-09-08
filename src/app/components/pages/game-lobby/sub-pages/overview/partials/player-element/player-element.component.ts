import {Component, Input, OnInit} from '@angular/core';
import {PlayerInGameOverview} from '../../../../../../../models/player-models/player-in-game-overview.model';
import {ApiService} from '../../../../../../../services/api.service';

@Component({
  selector: 'app-player-element',
  templateUrl: './player-element.component.html',
  styleUrls: ['./player-element.component.scss']
})
export class PlayerElementComponent implements OnInit {

  @Input() player: PlayerInGameOverview;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
  }

}
