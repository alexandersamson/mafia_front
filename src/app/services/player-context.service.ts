import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {ApiCall} from '../models/api-call.model';
import {Globals} from '../common/globals';
import {CookieService} from 'ngx-cookie-service';
import {PlayerCookiesService} from './player-cookies.service';
import {CurrentPlayer} from '../models/player-models/current-player.model';
import {Player} from '../models/player-models/player.model';
import {Package} from '../models/package.model';
import {Observable, of, interval, Subscription, BehaviorSubject} from 'rxjs';
import {flatMap, mergeMap, startWith, switchMap} from 'rxjs/operators';
import {PlayerInGameOverview} from '../models/player-models/player-in-game-overview.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerContextService {
  private playerIsLoggedIn: boolean;
  private subscription: Subscription = new Subscription();
  private $currentPlayer = new BehaviorSubject(new CurrentPlayer());


  constructor(private apiService: ApiService, private playerCookiesService: PlayerCookiesService) {
    this.getCurrentPlayerDataInterval();
  }

  public getCurrentPlayer(): Observable<CurrentPlayer> {
    const token = this.playerCookiesService.getPlayerToken();
    // console.log('requested getCurrentPlayer');
    if (token === '' || token === null || token === undefined) {
      return of(null);
    }
    return this.$currentPlayer as Observable<CurrentPlayer>;
  }

  public isLoggedIn(): Observable<boolean>{
    const player = this.$currentPlayer.getValue();
    // console.log('requested isLoggedIn');
    if (player && player.id){
      if (player.id > 0){
        return of(true);
      }
    }
    return of(false);
  }

  private getCurrentPlayerDataInterval(): void {
    const apiCall = new ApiCall(Globals.getPlayerByToken);
    this.subscription.add(
      interval(1500).pipe(
        startWith(0),
        switchMap(
          () => this.apiService.getData(apiCall)
        )
      ).subscribe(x => {
        if (!x.data || !x.data[0]){
          this.playerCookiesService.destroyPlayerToken();
        }
        this.$currentPlayer.next( x.data[0] as CurrentPlayer); })
    );
  }


  public getCpGameOverview(): Observable<Package> {
    const apiCall = new ApiCall(Globals.getCpGameOverview);
    return this.apiService.getData(apiCall);
  }

  public getCpPlayersOverview(): Observable<Package> {
    const apiCall = new ApiCall(Globals.getCpPlayersOverview);
    return this.apiService.getData(apiCall);
  }

  public getCpMyRoleOverview(): Observable<Package> {
    const apiCall = new ApiCall(Globals.getCpRoleDetails);
    return this.apiService.getData(apiCall);
  }



  // public getCurrentPlayer(): CurrentPlayer {
  //     const apiCall = new ApiCall(Globals.getPlayerByToken);
  //     this.apiService.getData(apiCall).subscribe(x => console.log(x));
  // }
}
