import {GameCreateOptions} from './game-create-options.model';
import {RoleForPublicListing} from '../role-models/role-for-public-listing.model';

export class GameCreateForm {
  public name: string;
  public roles: Array<RoleForPublicListing>;
  public options: GameCreateOptions;

  public constructor(game: any = null) {
    if (game) {
      this.name = game.name ?? '';
      this.roles = game.roles ?? null;
      this.options = game.options ?? new GameCreateOptions();
    } else {
      this.name = '';
      this.roles = null;
      this.options = new GameCreateOptions();
    }
  }
}
