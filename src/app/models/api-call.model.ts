import {Globals} from '../common/globals';
import {PlayerCookiesService} from '../services/player-cookies.service';

export class ApiCall {
  public publicApiKey: string;
  public request: string;
  public payload: object;
  public playerToken: string;
  constructor(request, payload = {}) {
    this.publicApiKey = Globals.apiKey;
    this.request = request;
    this.payload = payload;
    this.playerToken = null;
  }
}
