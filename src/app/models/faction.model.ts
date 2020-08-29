export class Faction {
  constructor(
    public id: number,
    public fid: string,
    public name: string,
    public description: string,
    public color: string,
    public imageUrl: string,
    public winAsWholeFaction: boolean,
    public winsWithFactions: Array<string>,
    public revealRolesToFaction: boolean,
    public hasFactionChat: boolean,
    public listPriority: number,
    public powerLevel: number,
    public deleted: number,
  ) {
  }
}
