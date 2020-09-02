export class GamePhase {
  public id: number;
  public gpid: string;
  public name: string;
  public events: Array<object>;
  public isNight: boolean;
  public duration: number;
  public nextPhaseId: number;
  public description: string;
  constructor(gamePhase: any) {
  this.id = gamePhase.id ?? null;
  this.gpid = gamePhase.gpid ?? null;
  this.name = gamePhase.name ?? null;
  this.events = gamePhase.events ?? null;
  this.isNight = gamePhase.isNight ?? false;
  this.duration = gamePhase.duration ?? null;
  this.nextPhaseId = gamePhase.nextPhaseId ?? null;
  this.description = gamePhase.description ?? null;
  }
}
