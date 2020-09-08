import {Component, Input, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {EMPTY, Observable, Subscription} from 'rxjs';
import {RoleForPublicListing} from '../../../../../models/role-models/role-for-public-listing.model';
import {catchError, delay, finalize, repeat, take} from 'rxjs/operators';
import {RoleServiceService} from '../../../../../services/role-service.service';

@Component({
  selector: 'app-selected-roles-list',
  templateUrl: './selected-roles-list.component.html',
  styleUrls: ['./selected-roles-list.component.scss']
})
export class SelectedRolesListComponent implements OnInit, OnDestroy {
  @Input() $roles: Observable<RoleForPublicListing[]>;
  @Output() removeRid = new EventEmitter<string>();
  @Output() addRid = new EventEmitter<string>();
  subscription = new Subscription();
  public selectedRoles: RoleForPublicListing[];
  private isRunning = false;

  constructor(private roleService: RoleServiceService) { }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(): void{
    this.subscription.add(
      this.$roles.subscribe(
      x => {
          if (x && x.length > 0) {
            this.selectedRoles = this.sortAndGroupRoles(x);
          } else {
            this.selectedRoles = null;
          }
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  callParentRemove(value): void {
    this.removeRid.emit(value);
  }

  callParentAdd(value): void {
    this.addRid.emit(value);
  }

  sortAndGroupRoles(val: Array<any>): Array<any>{
    let uniques = val.filter( this.onlyUnique );
    for (const [key, value] of Object.entries(uniques)){
      if (uniques[key]) {
        uniques[key]['count'] = val.filter(v => v === value).length;
      }
    }
    uniques = uniques.sort((x, y) => {
      if (x.name < y.name){
        return -1;
      } else if (x.name > y.name){
        return 1;
      } else {
        return 0;
      }
    });
    return uniques.sort((x, y) => {
      if (!x.faction){
        return 0;
      }
      if (x.faction.listPriority < y.faction.listPriority){
        return -1;
      } else if (x.faction.listPriority > y.faction.listPriority){
        return 1;
      } else {
        return 0;
      }
    });
  }

  onlyUnique(value, index, self): any {
    return self.indexOf(value) === index;
  }

}
