
export class Meta {
  public apiName: string;
  public version: string;
  public apiLink: string;
  public timestamp: number;
  public constructor(meta: any) {
    this.apiName = meta.apiName ?? 'App';
    this.version = meta.version ?? '[?]';
    this.apiLink = meta.apiLink ?? '#';
    this.timestamp = meta.time ?? Math.floor(Date.now() / 1000);
  }
}
