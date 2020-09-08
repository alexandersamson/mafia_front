import {Component, Input, OnInit} from '@angular/core';
import {RoleForMyRoleOverviewModel} from '../../../../../../../models/role-models/role-for-my-role-overview.model';
import {BehaviorSubject} from 'rxjs';
import {FactionForMyRoleOverview} from '../../../../../../../models/faction-models/faction-for-my-role-overview.model';
import {AbilityForMyRoleOverview} from '../../../../../../../models/ability-models/ability-for-my-role-overview.model';
import {Globals} from '../../../../../../../common/globals';
import {PlayerInGameOverview} from '../../../../../../../models/player-models/player-in-game-overview.model';

@Component({
  selector: 'app-my-role-partial',
  templateUrl: './my-role-partial.component.html',
  styleUrls: ['./my-role-partial.component.scss']
})
export class MyRolePartialComponent implements OnInit {
  thisPage = Globals.gameLobbyPage;
  playerActionsSubPage = Globals.playerActionsSubPage;
  role$: BehaviorSubject<RoleForMyRoleOverviewModel> = new BehaviorSubject<RoleForMyRoleOverviewModel>(null);
  faction$: BehaviorSubject<FactionForMyRoleOverview> = new BehaviorSubject<FactionForMyRoleOverview>(null);
  abilities$: BehaviorSubject<AbilityForMyRoleOverview[]> = new BehaviorSubject<AbilityForMyRoleOverview[]>(null);
  factionCompanionsData$: BehaviorSubject<PlayerInGameOverview[]> = new BehaviorSubject<PlayerInGameOverview[]>(null);

  constructor() { }

  @Input() set roleData(value: RoleForMyRoleOverviewModel){
    this.role$.next(value);
  }

  @Input() set factionData(value: FactionForMyRoleOverview){
    this.faction$.next(value);
  }

  @Input() set factionCompanionsData(value: PlayerInGameOverview[]){
    this.factionCompanionsData$.next(value);
  }

  @Input() set abilitiesData(value: AbilityForMyRoleOverview[]){
    this.abilities$.next(value);
  }

  ngOnInit(): void {
  }

}
