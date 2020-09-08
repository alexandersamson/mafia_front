import {Component, Input, OnInit} from '@angular/core';
import {PlayerInGameOverview} from '../../../../../../../models/player-models/player-in-game-overview.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-faction-companion-list',
  templateUrl: './faction-companion-list.component.html',
  styleUrls: ['./faction-companion-list.component.scss']
})
export class FactionCompanionListComponent implements OnInit {
  @Input() factionCompanionsData: Observable<PlayerInGameOverview[]>;
  constructor() { }

  ngOnInit(): void {
  }

}
