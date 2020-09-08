export class FactionSmallest {
  public id: number;
  public fid: string;
  public name: string;
  public color: string;
  public listPriority: number;


  public constructor(model: any) {
    if (!model) {
      this.id = null;
      this.fid = '';
      this.name = 'No Name';
      this.color = '#808080';
      this.listPriority = 1;
    }
    this.id = model.id ?? null;
    this.fid = model.fid ?? null;
    this.name = model.name ?? 'No Name';
    this.color = model.color ?? '#808080';
    this.listPriority = model.listPriority as number ?? 1;
  }
}
