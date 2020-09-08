
export class InventoryItemForMyRoleOverview {
  public id: number;
  public iid: number;
  public name: string;
  public type: string;
  public description: string;
  public quantity: number;
  public imageUrl: number;

  public constructor(model: any) {
    if (!model) {
      return null;
    }
    this.id = model.id ?? null;
    this.iid = model.iid ?? null;
    this.name = model.name ?? 'No name';
    this.type = model.type ?? 'No tame';
    this.description = model.description ?? 'No description';
    this.quantity = model.quantity ?? 0;
    this.imageUrl = model.imageUrl ?? 'inventory-items/default';
  }
}
