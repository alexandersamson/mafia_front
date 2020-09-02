import {Injectable} from '@angular/core';
import { Adapter } from '../../common/adapter';
import {Faction} from '../faction.model';
import {Player} from '../player-models/player.model';
import {GamePhase} from '../game-phase.model';

export class Game {
  constructor(
    public id: number,
    public gid: string,
    public name: string,
    public status: string,
    public countDays: number,
    public hostKeepsTime: boolean,
    public pausedTimeLeft: number,
    public nextPhaseTimestamp: number,
    public startPhase: GamePhase,
    public currentPhase: GamePhase,
    public isPublicListed: boolean,
    public pinCode: string = '',
    public hasPinCode: boolean = true,
    public creator: Player,
    public host: Player,
    public createdOn: number,
    public deleted: boolean = false,
    public availableSlots: number,
    public usedSlots: number,
    public factions: Array<Faction>
  ) {
  }
}

@Injectable({
    providedIn: 'root',
  })
  export class GameAdapter implements Adapter<Game> {
  adapt(item: any): Game {
    return new Game(
      item.id,
      item.gid,
      item.name,
      item.status,
      item.countDays,
      item.hostKeepsTime,
      item.pausedTimeLeft,
      item.nextPhaseTimestamp,
      item.startPhase,
      item.currentPhase,
      item.isPublicListed,
      item.pinCode,
      item.hasPinCode,
      item.creator,
      item.host,
      item.createdOn,
      item.deleted,
      item.availableSlots,
      item.usedSlots,
      item.factions);
  }
}

