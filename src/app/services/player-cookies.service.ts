import { Injectable } from '@angular/core';
import {Globals} from '../common/globals';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class PlayerCookiesService {

  constructor(private cookieService: CookieService) { }

  public getPlayerToken(): string{
    return this.cookieService.get(Globals.playerTokenPropertyAndCookieName);
  }
}
