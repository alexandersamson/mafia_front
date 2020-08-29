export class ApiCall {
  public publicApiKey: string;
  public request: string;
  public payload: object;
  public player: object;
  constructor(publicApiKey, request, payload = {}, player = {}) {
    this.publicApiKey = publicApiKey;
    this.request = request;
    this.payload = payload;
    this.player = player;
  }
}
