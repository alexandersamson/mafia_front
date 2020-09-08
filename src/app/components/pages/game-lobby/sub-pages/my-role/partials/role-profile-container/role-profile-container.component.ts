import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {PlayerContextService} from '../../../../../../../services/player-context.service';
import {mergeMap, startWith} from 'rxjs/operators';
import {SeatAndRoleOverview} from '../../../../../../../models/seat-models/seat-and-role-overview.model';

@Component({
  selector: 'app-role-profile-container',
  templateUrl: './role-profile-container.component.html',
  styleUrls: ['./role-profile-container.component.scss']
})
export class RoleProfileContainerComponent  implements OnInit, OnDestroy{
  private subscription: Subscription = new Subscription();
  public seatAndRoleOverview: SeatAndRoleOverview;

  constructor(private playerContext: PlayerContextService) { }

  ngOnInit(): void {
    this.startInterval();
  }

  public startInterval(): void{
    this.subscription.add(interval(1500).pipe(startWith(0),
      mergeMap(() => this.playerContext.getCpMyRoleOverview()
      )).subscribe(data => {
        if (data && data.data && data.data[0]){
          this.seatAndRoleOverview = new SeatAndRoleOverview(data.data[0]);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
