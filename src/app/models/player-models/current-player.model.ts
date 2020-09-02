import {Player} from './player.model';
import {GameOverviewSmallest} from '../game-models/game-overview-smallest-model';

export class CurrentPlayer extends Player{
  public pid: string;
  public inGame: GameOverviewSmallest;
  public isHost: boolean;
}
