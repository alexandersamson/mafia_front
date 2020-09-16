import {Component, Input, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {EMPTY, Observable, Subscription} from 'rxjs';
import {RoleForPublicListing} from '../../../../../models/role-models/role-for-public-listing.model';
import {catchError, delay, finalize, repeat, take} from 'rxjs/operators';
import {RoleServiceService} from '../../../../../services/role-service.service';
import {PowerLevelsToProgressService} from '../../../../../services/power-levels-to-progress.service';
import {ProgressBar} from '../../../../../models/progress-bar.model';
import {Faction} from '../../../../../models/faction.model';

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
  public amountOfRoles: number;
  public barData: Array<ProgressBar>;

  constructor(private roleService: RoleServiceService, private powerlevelToProgress: PowerLevelsToProgressService) { }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(): void{
    this.subscription.add(
      this.$roles.subscribe(
      x => {
          if (x && x.length > 0) {
            this.amountOfRoles = x.length;
            this.selectedRoles = this.sortAndGroupRoles(x);
            this.barData = this.powerlevelToProgress.getProgressBarData(this.prepareBarData(this.selectedRoles));
          } else {
            this.amountOfRoles = 0;
            this.selectedRoles = null;
            this.barData = null;
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


  prepareBarData(selectedRoles: RoleForPublicListing[]): any{
    const factions: Faction[] = [];
    selectedRoles.map((x: RoleForPublicListing) => {
      if (!factions[x.faction.fid]){
        factions[x.faction.fid] = x.faction;
        factions[x.faction.fid].powerLevel = 0;
      }
      factions[x.faction.fid].powerLevel += (x.balancePower * x.count);
      return;
    });
    const arr = [];
    for (const faction in factions) {
      arr.push(factions[faction]);
    }
    return arr;
  }


  sortAndGroupRoles(val: Array<RoleForPublicListing>): Array<any>{
    let uniques = val.filter( this.onlyUnique );
    for (const [key, value] of Object.entries(uniques)){
      if (uniques[key]) {
        uniques[key].count = val.filter(v => v === value).length;
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

  getGameBalanceVerdict(): any{
    if (!this.barData){
      return null;
    }
    let globalWarning = false;
    let messages = [];
    this.barData.map(x => {
      let warning = false;
      const totalLength = (100 / this.barData.length);
      if ((totalLength / x.fraction < 0.6250)) {
        messages.push(x.name + ' ✗+');
        warning = true;
      } else if ((totalLength / x.fraction < 0.7142)) {
        messages.push(x.name + ' +++');
        warning = true;
      } else if ((totalLength / x.fraction < 0.8333)){
        messages.push(x.name + ' ++');
        warning = true;
      } else if ((totalLength / x.fraction < 0.9434)){
        messages.push(x.name + ' +');
        warning = true;
      } else if ((totalLength / x.fraction > 2.5)){
        messages.push(x.name + ' ✗-');
        warning = true;
      } else if ((totalLength / x.fraction > 1.667)){
        messages.push(x.name + ' ---');
        warning = true;
      } else if ((totalLength / x.fraction > 1.250)){
        messages.push(x.name + ' --');
        warning = true;
      } else if ((totalLength / x.fraction > 1.0638)) {
        messages.push(x.name + ' -');
        warning = true;
      }
      if (this.barData.length > 1 && !warning){
        messages.push(x.name + ' ✓');
      } else if (!warning && this.amountOfRoles < 3){
        messages.push('Select more roles');
      } else if (!warning){
        messages.push('Select more factions');
      } else {
        globalWarning = true;
      }
    });
    if ((this.barData.length > 1) && !globalWarning){
      messages = ['Balanced ✓'];
    }
    return messages;
  }

  onlyUnique(value, index, self): any {
    return self.indexOf(value) === index;
  }

}
