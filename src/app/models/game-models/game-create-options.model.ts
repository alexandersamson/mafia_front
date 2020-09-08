export class GameCreateOptions {
  public isPublicListed: boolean;
  public hasPinCode: boolean;
  public pinCode: string;
  public startPhaseId: number;

  public constructor(options: any = null) {
    if (options) {
      this.isPublicListed = options.isPublicListed ?? true;
      this.hasPinCode = options.hasPinCode ?? false;
      this.pinCode = options.pinCode ?? '';
      this.startPhaseId = options.startPhaseId ?? 1;
    } else {
      this.isPublicListed = true;
      this.hasPinCode = false;
      this.pinCode = '';
      this.startPhaseId = 1;
    }
  }
}
