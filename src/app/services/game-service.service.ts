import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {ApiCall} from '../models/api-call.model';
import {RoleForPublicListing} from '../models/role-models/role-for-public-listing.model';
import {ApiService} from './api.service';
import {Globals} from '../common/globals';
import {map, retry, shareReplay, take} from 'rxjs/operators';
import {GamePhase} from '../models/game-phase-models/game-phase.model';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService{
private apiCall: ApiCall;
public gamePhases$: Observable<GamePhase[]>;

  constructor(private apiService: ApiService) {
    this.gamePhases$ = this.fetchAllGamePhases();
  }

public getAllGamePhases(): Observable<GamePhase[]> {
    return this.gamePhases$;
  }

  private fetchAllGamePhases(): Observable<GamePhase[]>{
    this.apiCall = new ApiCall(Globals.getAllGamePhases);
    return this.apiService.getData(this.apiCall).pipe(
      map(x => x.data as GamePhase[]),
      shareReplay(1),
      take(1)
    );
  }
}
