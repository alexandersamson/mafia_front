import {FactionSmallest} from './faction-smallest.model';

export class FactionForMyRoleOverview {
  public id: number;
  public fid: string;
  public name: string;
  public description: string;
  public color: string;
  public imageUrl: string;
  public winAsWholeFaction: boolean;
  public winsWithFactions: Array<FactionSmallest>;
  public revealRolesToFaction: boolean;
  public hasFactionChat: boolean;
  public powerLevel: boolean;
  public isInert: boolean;
  public listPriority: number;

  public constructor(model: any) {
    if (!model) {
      return null;
    }
    this.id = model.id ?? null;
    this.fid = model.fid ?? null;
    this.name = model.name ?? 'No Name';
    this.description = model.description ?? 'No description.';
    this.color = model.type ?? '#808080';
    this.imageUrl = model.imageUrl ?? 'factions/default';
    this.winAsWholeFaction = model.winAsWholeFaction ?? null;
    this.winsWithFactions = model.winsWithFactions ?? null;
    this.revealRolesToFaction = model.revealRolesToFaction ?? null;
    this.hasFactionChat = model.hasFactionChat ?? null;
    this.powerLevel = model.powerLevel ?? 0;
    this.isInert = model.isInert ?? null;
    this.listPriority = model.listPriority ?? null;
  }
}
