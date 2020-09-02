export class GameOverviewSmallest {
  public id: number;
  public gid: number;
  public name: string;
  public status: string;

  public constructor(game: any) {
    if (!game){ return null; }
    this.id = game.id ?? null;
    this.gid = game.gid ?? null;
    this.name = game.name ?? 'noname';
    this.status = game.status ?? 'unknown';
  }
}
