export class RoleForMyRoleOverviewModel {
  public id: number;
  public rid: string;
  public name: string;
  public type: string;
  public description: string;
  public imageUrl: string;


  public constructor(model: any) {
    if (!model) {
      return null;
    }
    this.id = model.id ?? null;
    this.rid = model.rid ?? null;
    this.name = model.name ?? 'No Name';
    this.type = model.type ?? 'No Type';
    this.description = model.description ?? 'No description.';
    this.imageUrl = model.imageUrl ?? 'roles/default';
  }
}
