export class GamePhase {
  public id: number;
  public gpid: string;
  public name: string;
  public events: Array<any>;
  public isNight: boolean;
  public duration: number;
  public nextPhaseId: number;
  public description: string;
  public deleted: boolean;


  public constructor(model: any = null) {
    if (!model) {
      this.id = null;
      this.gpid = null;
      this.name = 'No name';
      this.events = null;
      this.isNight = false;
      this.duration = 60;
      this.nextPhaseId = 1;
      this.description = 'No description';
      this.deleted = false;
    }
    this.id = model.id ?? null;
    this.gpid = model.fid ?? null;
    this.name = model.name ?? 'No Name';
    this.events = model.events ?? null;
    this.isNight = model.isNight ?? false;
    this.duration = model.duration ?? 60;
    this.nextPhaseId = model.nextPhaseId ?? 1;
    this.description = model.description ?? 'No Description';
    this.deleted = model.deleted ?? false;
  }
}
