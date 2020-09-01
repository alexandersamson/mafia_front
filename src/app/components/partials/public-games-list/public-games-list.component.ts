import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Package, PackageAdapter} from '../../../models/package.model';
import {Game, GameAdapter} from '../../../models/game.model';
import {Pagination, PaginationAdapter} from '../../../models/pagination.model';
import {ApiCall} from '../../../models/api-call.model';
import {Globals} from '../../../common/globals';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-public-games-list',
  templateUrl: './public-games-list.component.html',
  styleUrls: ['./public-games-list.component.scss']
})


export class PublicGamesListComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  packet: Package;
  games: Game[];
  @Output() paginationEvent = new EventEmitter<Pagination>();
  private apiCall: ApiCall;

  constructor(private apiService: ApiService, private paginationAdapter: PaginationAdapter, private gameAdapter: GameAdapter) {
  }

  ngOnInit(): void {
    this.apiCall = new ApiCall(Globals.getJoinableGamesPageCall);
    this.subscription.add(this.apiService.getData(this.apiCall).subscribe((packet => {
      this.games = packet.data.map((data) => this.gameAdapter.adapt(data));
      this.paginationEvent.emit(packet.pagination.map((data: {}) => this.paginationAdapter.adapt(data))[0]);
    })));
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

}
