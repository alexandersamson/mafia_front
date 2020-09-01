import {Component, OnDestroy, OnInit} from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreatePlayerPayload} from '../../../models/payload-models/create-player-payload.model';
import {ApiCall} from '../../../models/api-call.model';
import {Globals} from '../../../common/globals';
import {PlayerContextService} from '../../../services/player-context.service';
import {ApiService} from '../../../services/api.service';
import {CurrentPlayer} from '../../../models/current-player.model';
import {CookieService} from 'ngx-cookie-service';
import {Subscription} from 'rxjs';
import {ModalBaseTemplateComponent} from '../base-template/modal-base-template.component';

@Component({
  selector: 'app-create-player-modal',
  templateUrl: './create-player-modal.component.html',
  styleUrls: ['./create-player-modal.component.scss']
})
export class CreatePlayerModalComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  currentPlayer: CurrentPlayer;
  createPlayerForm: FormGroup;
  isLoading: boolean;
  createPlayerPayload: CreatePlayerPayload;
  apiCall: ApiCall;

  constructor(public modal: NgbActiveModal,
              private formBuilder: FormBuilder,
              private playerContext: PlayerContextService,
              private apiService: ApiService,
              private cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.setForm();
  }

  onSubmit(): void{
    if (this.createPlayerForm.invalid || this.isLoading){
      return;
    }
    this.createPlayerPayload = new CreatePlayerPayload(this.createPlayerForm.value.name);
    this.apiCall = new ApiCall(Globals.createPlayerCall, this.createPlayerPayload);
    this.isLoading = true;
    this.subscription.add(this.apiService.getData(this.apiCall).subscribe(x => {
      console.log(x.data[0][Globals.playerTokenPropertyAndCookieName]);
      this.cookieService.set(
        Globals.playerTokenPropertyAndCookieName,
        x.data[0][Globals.playerTokenPropertyAndCookieName].token,
        365, null, null, null, 'Strict'
      );
      this.subscription.add(this.playerContext.checkForPlayerLogin().subscribe(packet => {
        if (packet != null && packet.data[0].hasOwnProperty('name')){
          this.isLoading = false;
          this.modal.close();
        } else {
          console.log(packet);
        }
      }));
    }, error => {
      console.log(error);
      this.isLoading = false;
    }));
  }

  get createPlayerFormData(): object {
    if (this.createPlayerForm.controls) {
      return this.createPlayerForm.controls;
    }
    return null;
  }


  get formIsValid(): boolean{
    return !this.createPlayerForm.invalid;
  }

  private setForm(): void{
    this.createPlayerForm = this.formBuilder.group({
      name: [this.currentPlayer.name, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
    });
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

}
