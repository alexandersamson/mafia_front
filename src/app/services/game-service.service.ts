import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, interval, Observable, Subscription} from 'rxjs';
import {ApiCall} from '../models/api-call.model';
import {RoleForPublicListing} from '../models/role-models/role-for-public-listing.model';
import {ApiService} from './api.service';
import {Globals} from '../common/globals';
import {map, mergeMap, retry, shareReplay, startWith, switchMap, take} from 'rxjs/operators';
import {GamePhase} from '../models/game-phase-models/game-phase.model';
import {GameOverview} from '../models/game-models/game-overview-model';
import {PlayerContextService} from './player-context.service';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  private apiCall: ApiCall;
  public gamePhases$: Observable<GamePhase[]>;
  private intervalSubscription: Subscription = new Subscription();
  private gameOverview$: BehaviorSubject<GameOverview> = new BehaviorSubject(new GameOverview(null));

  constructor(private apiService: ApiService, private playerContext: PlayerContextService) {
    this.gamePhases$ = this.fetchAllGamePhases();
  }

  public getAllGamePhases(): Observable<GamePhase[]> {
    return this.gamePhases$;
  }

  public getGameOverview(): Observable<GameOverview>{
    return this.gameOverview$.asObservable();
  }

  private fetchAllGamePhases(): Observable<GamePhase[]> {
    this.apiCall = new ApiCall(Globals.getAllGamePhases);
    return this.apiService.getData(this.apiCall).pipe(
      map(x => x.data as GamePhase[]),
      shareReplay(1),
      take(1)
    );
  }


  public startGameOverViewInterval(): void {
    this.intervalSubscription.add(
      interval(1500).pipe(
        startWith(0),
        retry(3),
        switchMap(() => this.playerContext.getCpGameOverview()
        )).subscribe(pack => {
        if (pack && pack.data && pack.data[0]) {
          this.gameOverview$.next(new GameOverview(pack.data[0]));
        }
      })
    );
  }

  public stopGameViewInterval(): void {
    this.intervalSubscription.unsubscribe();
    // Below: necessary to 'recock' the container in order to accept a subscription again. Strange workaround?
    this.intervalSubscription = new Subscription();
  }

}
