import {RoleForMyRoleOverviewModel} from '../role-models/role-for-my-role-overview.model';
import {FactionForMyRoleOverview} from '../faction-models/faction-for-my-role-overview.model';
import {AbilityForMyRoleOverview} from '../ability-models/ability-for-my-role-overview.model';
import {InventoryItemForMyRoleOverview} from '../inventory-item-models/inventory-item-for-my-role-overview.model';
import {BuffsForMyRoleOverview} from '../buff-models/buff-for-my-role-overview.model';
import {PlayerInGameOverview} from '../player-models/player-in-game-overview.model';

export class SeatAndRoleOverview {
  public id: number;
  public name: string;
  public knowsOwnRole: boolean;
  public knowsOwnFaction: boolean;
  public hasRoleExposed: boolean;
  public hasFactionExposed: boolean;
  public hasTypeExposed: boolean;
  public hasInventoryExposed: boolean;
  public role: RoleForMyRoleOverviewModel;
  public faction: FactionForMyRoleOverview;
  public factionCompanions: Array<PlayerInGameOverview>
  public abilities: Array<AbilityForMyRoleOverview>;
  public inventory: Array<InventoryItemForMyRoleOverview>;
  public buffs: Array<BuffsForMyRoleOverview>;
  public isAlive: boolean;
  public banned: boolean;

  public constructor(model: any) {
    if (!model) {
      return null;
    }
    this.id = model.id ?? null;
    this.name = model.name ?? 'No Name';
    this.knowsOwnRole = model.knowsOwnRole ?? false;
    this.knowsOwnFaction = model.knowsOwnFaction ?? false;
    this.hasRoleExposed = model.hasRoleExposed ?? false;
    this.hasTypeExposed = model.hasTypeExposed ?? false;
    this.hasInventoryExposed = model.hasInventoryExposed ?? false;
    this.role = model.role ?? null;
    this.faction = model.faction ?? null;
    this.factionCompanions = model.factionCompanions ?? null;
    this.abilities = model.abilities ?? null;
    this.inventory = model.inventory ?? null;
    this.buffs = model.buffs ?? null;
    this.isAlive = model.isAlive ?? null;
    this.banned = model.banned ?? null;
  }
}
