export class PlayerInGameOverview {
  public id: number;
  public name: string;
  public discriminator: string;
  public lastSeen: number;
  public isSuperadmin: boolean;
  public isAdmin: boolean;
  public isModerator: boolean;
  public isHost: boolean;
  public isAlive: boolean;

  public constructor(playerInGameOverview: any) {
    if (!playerInGameOverview) {
      return null;
    }
    this.id = playerInGameOverview.id ?? null;
    this.name = playerInGameOverview.name ?? 'No Name';
    this.discriminator = playerInGameOverview.discriminator ?? '#????';
    this.lastSeen = Number(playerInGameOverview.lastSeen) ?? 0;
    this.isSuperadmin = playerInGameOverview.isSuperadmin ?? false;
    this.isAdmin = playerInGameOverview.isAdmin ?? false;
    this.isModerator = playerInGameOverview.isModerator ?? false;
    this.isHost = playerInGameOverview.isHost ?? false;
    this.isAlive = playerInGameOverview.isAlive ?? false;
  }
}
