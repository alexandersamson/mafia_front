import {Component, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';
import {EMPTY, Observable, of, Subscription, throwError} from 'rxjs';
import {RoleForPublicListing} from '../../../../../models/role-models/role-for-public-listing.model';
import {RoleServiceService} from '../../../../../services/role-service.service';
import {catchError, concatMap, delay, finalize, mergeMap, repeat, retry, switchMap, take} from 'rxjs/operators';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss']
})
export class RolesListComponent implements OnInit, OnDestroy {
  @Output() addRid = new EventEmitter<string>();
  private subscription = new Subscription();
  public roles: RoleForPublicListing[];


  constructor(private roleService: RoleServiceService) { }

  ngOnInit(): void {
    this.getRoles();
  }



  getRoles(): void{
    this.subscription.add(
      this.roleService.getAllRoles().subscribe(
        x => {
          this.roles = this.groupAvailableRoles(x);
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  callParent(value): void {
    this.addRid.emit(value);
  }


  groupAvailableRoles(roles: RoleForPublicListing[]): Array<any> {
    const newRoles = [];
    if (roles.length > 1) {
      for (const [key, value] of Object.entries(roles)) {
        if (roles[key]) {
          if (!newRoles[value.faction.name]) {
            newRoles[value.faction.name] = [value];
          } else {
            newRoles[value.faction.name].push(value);
          }
        }
      }
    }
    const sortable = [];
    for (const faction in newRoles) {
      sortable.push([faction, newRoles[faction]]);
    }
    return sortable.sort((a, b) => {
      return a[1][0].faction.listPriority > b[1][0].faction.listPriority ? 1 : a[1][0].faction.listPriority < b[1][0].faction.listPriority ? -1 : 0;
    });
  }
}
