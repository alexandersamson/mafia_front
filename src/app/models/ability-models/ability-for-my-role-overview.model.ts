
export class AbilityForMyRoleOverview {
  public id: number;
  public aid: string;
  public name: string;
  public type: string;
  public description: string;
  public mustBeActivated: boolean;
  public canUseAt: Array<number>;

  public constructor(model: any) {
    if (!model) {
      this.id = null;
      this.aid = '';
      this.name = 'No name';
      this.type = 'No type';
      this.description = 'No description';
      this.mustBeActivated = null;
      this.canUseAt = null;
    }
    this.id = model.id ?? null;
    this.aid = model.aid ?? null;
    this.name = model.name ?? 'No name';
    this.type = model.type ?? 'No nype';
    this.description = model.description ?? 'No description.';
    this.mustBeActivated = model.mustBeActivated ?? null;
    this.canUseAt = model.canUseAt ?? null;
  }
}
