import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {ApiCall} from '../models/api-call.model';
import {Globals} from '../common/globals';
import {CookieService} from 'ngx-cookie-service';
import {PlayerCookiesService} from './player-cookies.service';
import {CurrentPlayer} from '../models/current-player.model';
import {Player} from '../models/player.model';
import {Package} from '../models/package.model';
import {Observable, of, interval} from 'rxjs';
import {flatMap, mergeMap, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerContextService {
  private playerIsLoggedIn: boolean;

  constructor(private apiService: ApiService, private playerCookiesService: PlayerCookiesService) {
  }

  public checkForPlayerLogin(): Observable<Package> {
    const token = this.playerCookiesService.getPlayerToken();
    if (token === '' || token === null || token === undefined) {
      return of(null);
    }
    const apiCall = new ApiCall(Globals.getPlayerByToken);
    return this.apiService.getData(apiCall);
  }

  public getPlayerPackage(): Observable<Package> {
    const apiCall = new ApiCall(Globals.getPlayerPackage);
    return this.apiService.getData(apiCall);
  }



  // public getCurrentPlayer(): CurrentPlayer {
  //     const apiCall = new ApiCall(Globals.getPlayerByToken);
  //     this.apiService.getData(apiCall).subscribe(x => console.log(x));
  // }
}
