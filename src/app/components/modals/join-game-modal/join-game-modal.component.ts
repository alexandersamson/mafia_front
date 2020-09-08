import {Component, OnDestroy, OnInit} from '@angular/core';
import {Game} from '../../../models/game-models/game.model';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {JoinGamePayload} from '../../../models/payload-models/join-game-payload.model';
import {ApiCall} from '../../../models/api-call.model';
import {Globals} from '../../../common/globals';
import {PlayerContextService} from '../../../services/player-context.service';
import {ApiService} from '../../../services/api.service';
import {Subscription} from 'rxjs';
import {ModalBaseTemplateComponent} from '../base-template/modal-base-template.component';

@Component({
  selector: 'app-join-game-modal',
  templateUrl: './join-game-modal.component.html',
  styleUrls: ['./join-game-modal.component.scss']
})
export class JoinGameModalComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  game: Game;
  editForm: FormGroup;
  isLoading: boolean;
  joinGamePayload: JoinGamePayload;
  apiCall: ApiCall;

  constructor(public modal: NgbActiveModal,
              private formBuilder: FormBuilder,
              private playerContext: PlayerContextService,
              private apiService: ApiService) {
  }

  ngOnInit(): void {
    if (!this.game.hasPinCode){
      this.byPassJoin();
    } else {
      this.setForm();
    }
  }

  byPassJoin(): void{
    this.joinGamePayload = new JoinGamePayload(this.game.gid, null);
    this.apiCall = new ApiCall(Globals.joinGameCall, this.joinGamePayload);
    this.isLoading = true;
    this.subscription.add(this.apiService.getData(this.apiCall).subscribe(x => {
      this.isLoading = false;
      if (x.data == null) {
        this.modal.close(false);

      }
      this.modal.close(true);
    }, error => {
      console.log(error);
      this.isLoading = false;
    }));
  }

  onSubmit(bypass = false): void{
    if (this.editForm.invalid || this.isLoading){
      return;
    }
    this.joinGamePayload = new JoinGamePayload(this.game.gid, this.editForm.value.pinCode);
    this.apiCall = new ApiCall(Globals.joinGameCall, this.joinGamePayload);
    this.isLoading = true;
    this.subscription.add(this.apiService.getData(this.apiCall).subscribe(x => {
      this.isLoading = false;
      if (x.data == null) {
        this.modal.close(false);

      }
      this.modal.close(true);
    }, error => {
      console.log(error);
      this.isLoading = false;
    }));

  }

  get editFormData(): object {
    return this.editForm.controls;
  }

  get formIsValid(): boolean {
    if (this.editForm) {
      return !this.editForm.invalid;
    }
  }

  private setForm(): void{
    this.editForm = this.formBuilder.group({
      name: [this.game.name],
      gid: [this.game.gid],
      pinCode: [this.game.pinCode, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(10)])]
    });
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

}
