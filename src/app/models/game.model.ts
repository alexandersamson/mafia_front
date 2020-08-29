import {Injectable} from '@angular/core';
import { Adapter } from '../common/adapter';
import {Faction} from './faction.model';

export class Game {
  constructor(
    public id: number,
    public gid: string,
    public name: string,
    public status: string,
    public countDays: number = 0,
    public countNights: number = 0,
    public startPhase: string = '',
    public isPublicListed: boolean,
    public pinCode: string = '',
    public creatorPlayerId: number,
    public creatorName: string = '',
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
      item.countNights,
      item.startPhase,
      item.isPublicListed,
      item.pinCode,
      item.creatorPlayerId,
      item.creatorName,
      item.createdOn,
      item.deleted,
      item.availableSlots,
      item.usedSlots,
      item.factions);
  }
}

