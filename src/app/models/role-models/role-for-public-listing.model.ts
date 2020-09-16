import {FactionSmallest} from '../faction-models/faction-smallest.model';
import {AbilityForMyRoleOverview} from '../ability-models/ability-for-my-role-overview.model';

export class RoleForPublicListing {
  public id: number;
  public rid: string;
  public name: string;
  public type: string;
  public balancePower: number;
  public description: string;
  public imageUrl: string;
  public faction: FactionSmallest;
  public abilities: Array<AbilityForMyRoleOverview>;

  public count = 0;


  public constructor(model: any) {
    if (!model) {
      return null;
    }
    this.id = model.id ?? null;
    this.rid = model.rid ?? null;
    this.name = model.name ?? 'No Name';
    this.type = model.type ?? 'No Type';
    this.balancePower = model.balancePower.valueOf() ?? 0;
    this.description = model.description ?? 'No description.';
    this.imageUrl = model.imageUrl ?? 'roles/default';
    this.faction = model.faction ?? null;
    this.abilities = model.abilities ?? [new AbilityForMyRoleOverview(null)];
  }
}
