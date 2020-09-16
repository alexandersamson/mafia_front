import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import {GameCreateForm} from '../../../../../models/game-models/game-create-form.model';
import {RoleForPublicListing} from '../../../../../models/role-models/role-for-public-listing.model';
import {RoleServiceService} from '../../../../../services/role-service.service';
import {BehaviorSubject, EMPTY, Observable, Subscription} from 'rxjs';
import {GameServiceService} from '../../../../../services/game-service.service';
import {GamePhase} from '../../../../../models/game-phase-models/game-phase.model';
import {catchError, delay, retry, subscribeOn, tap} from 'rxjs/operators';
import {CreatePlayerPayload} from '../../../../../models/payload-models/create-player-payload.model';
import {ApiCall} from '../../../../../models/api-call.model';
import {Globals} from '../../../../../common/globals';
import {ApiService} from '../../../../../services/api.service';
import {Game} from '../../../../../models/game-models/game.model';

@Component({
  selector: 'app-create-game-form',
  templateUrl: './create-game-form.component.html',
  styleUrls: ['./create-game-form.component.scss']
})
export class CreateGameFormComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  createGameForm: FormGroup;
  createGameModel: GameCreateForm = new GameCreateForm();
  public roles: RoleForPublicListing[] = [];
  public $selectedRoles = new BehaviorSubject<RoleForPublicListing[]>(null);
  private fetchedRoles: RoleForPublicListing[];
  public $gamePhases = new BehaviorSubject<GamePhase[]>(null);
  private fetchedGamePhases: GamePhase[];
  public roleIds: Array<string> = [];
  public fetchedAllRoles = false;
  public errors: Array<string>;

  constructor(
    private formBuilder: FormBuilder,
    private roleService: RoleServiceService,
    private gameService: GameServiceService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.getRoles();
    this.getGamePhases();
    this.createGameForm = this.createFormGroupWithFormBuilder(this.formBuilder);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getSelectedRolesAsObservable(): Observable<RoleForPublicListing[]>{
    return this.$selectedRoles.asObservable();
  }


  getRoles(): void{
    this.subscription.add(
      this.roleService.getAllRoles().subscribe(
        x => {
          this.fetchedRoles = x;
        }
      )
    );
  }

  selectedRolesAreValid(): boolean{
    this.errors = [];
    if (!this.createGameForm.value.name){
      this.errors.push('No name given.');
    } else if (this.createGameForm.value.name.length < 4){
      this.errors.push('Name shorter than 4 charachters minimum.');
    } else if (this.createGameForm.value.name.length > 20){
      this.errors.push('Name longer than 20 charachters maximum.');
    }
    if (this.roles.length < 3){
      this.errors.push('Less than 3 roles selected');
    } else if (this.roles.length > 32){
      this.errors.push('More than 32 roles selected');
    } else {
      const factions = [];
      this.roles.map(x => {
        factions[x.faction.fid] = true;
      });
      if (Object.keys(factions).length === 1) {
        this.errors.push('Roles selected from less than 2 different factions.');
      }
    }
    return this.errors.length < 1;
  }


  getGamePhases(): void{
    this.subscription.add(
      this.gameService.getAllGamePhases().subscribe(
        x => {
          this.fetchedGamePhases = x;
          if (this.fetchedGamePhases && this.fetchedGamePhases.length > 1){
            this.$gamePhases.next(this.fetchedGamePhases);
          }
        }, error => {
          console.log(error);
        }
      )
    );
  }


  addToSelected(value: string): void{
      const role = this.fetchedRoles.find(x => (x.rid === value));
      this.roles.push(role);
      this.$selectedRoles.next(this.roles);
  }


  removeFromSelected(value: string): void{
    this.roles.splice(this.roles.findIndex(x => x.rid === value), 1);
    this.$selectedRoles.next(this.roles);
  }

  onSubmit(): void{
    if (!this.selectedRolesAreValid()){
      alert('Cannot create game!');
      return;
    }
    const payloadModel = this.createGameForm.value;
    payloadModel.roles = this.roles.map(x => x.rid);
    const apiCall = new ApiCall(Globals.createGame, payloadModel);
    this.apiService.getData(apiCall).subscribe(x => {
      if (x.data && x.data[0] && (x.data[0]['gid'] as Game['gid'])){
        console.log('game ok');
      }
    });
  }



createFormGroupWithFormBuilder(formBuilder: FormBuilder): FormGroup{
    return formBuilder.group({
      name: [this.createGameModel.name],
      options: this.formBuilder.group({
        isPublicListed: [this.createGameModel.options.isPublicListed],
        hasPinCode: [this.createGameModel.options.hasPinCode],
        pinCode: [this.createGameModel.options.pinCode],
        startPhaseId: [this.createGameModel.options.startPhaseId]
      })
    });
  }

}
