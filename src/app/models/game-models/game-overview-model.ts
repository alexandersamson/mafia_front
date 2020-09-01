import {GamePhase} from '../game-phase.model';

export class GameOverview {
  public gid: number;
  public name: string;
  public status: string;
  public countDays: number;
  public hostKeepsTime: boolean;
  public pausedTimeLeft: number;
  public nextPhaseTimestamp: number;
  public startPhase: GamePhase;
  public currentPhase: GamePhase;
  public isPublicListed: boolean;
  public showGameRoles: boolean;
  public hasPinCode: boolean;
  public availableSlots: string;
  public usedSlots: number;

  public constructor(game: any) {
    this.gid = game.gid ?? '';
    this.name = game.name ?? '[noname]';
    this.status = game.status ?? '[unknown]';
    this.countDays = game.countDays ?? 0;
    this.hostKeepsTime = game.hostKeepsTime ?? null;
    this.pausedTimeLeft = game.pausedTimeLeft ?? 0;
    this.nextPhaseTimestamp = game.nextPhaseTimestamp ?? 0;
    this.startPhase = game.startPhase ?? '[unknown]';
    this.currentPhase = game.currentPhase ?? '[unknown]';
    this.isPublicListed = game.isPublicListed ?? 0;
    this.showGameRoles = game.showGameRoles ?? false;
    this.hasPinCode = game.hasPinCode ?? false;
    this.availableSlots = game.availableSlots ?? 0;
    this.usedSlots = game.usedSlots ?? 0;
  }
}
