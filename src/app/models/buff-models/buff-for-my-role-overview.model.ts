export class BuffsForMyRoleOverview {
  public id: number;
  public bid: string;
  public name: string;
  public type: string;
  public description: string;
  public imageUrl: number;


  public constructor(model: any) {
    if (!model) {
      return null;
    }
    this.id = model.id ?? null;
    this.bid = model.bid ?? null;
    this.name = model.name ?? 'Unnamed buff';
    this.type = model.type ?? 'No type';
    this.description = model.description ?? 'No description';
    this.imageUrl = model.imageUrl ?? 'buffs/default';
  }
}
