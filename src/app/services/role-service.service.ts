import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {ApiCall} from '../models/api-call.model';
import {Globals} from '../common/globals';
import {BehaviorSubject, interval, Observable, of, Subscription} from 'rxjs';
import {catchError, delay, map, retry, share, shareReplay, startWith, switchMap, take, tap} from 'rxjs/operators';
import {CurrentPlayer} from '../models/player-models/current-player.model';
import {RoleForPublicListing} from '../models/role-models/role-for-public-listing.model';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService implements OnDestroy{
  private subscription: Subscription = new Subscription();
  private apiCall: ApiCall;
  fetchedRoles$: Observable<RoleForPublicListing[]>;

  constructor(private apiService: ApiService) {
    this.fetchedRoles$ = this.fetchAllRoles();
  }


  private fetchAllRoles(): Observable<RoleForPublicListing[]>{
    this.apiCall = new ApiCall(Globals.getAllRoles);
    return this.apiService.getData(this.apiCall).pipe(
      map(x => x.data as RoleForPublicListing[]),
      shareReplay(1),
      take(1)
    );
  }

  public getAllRoles(): Observable<RoleForPublicListing[]> {
    return this.fetchedRoles$;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
