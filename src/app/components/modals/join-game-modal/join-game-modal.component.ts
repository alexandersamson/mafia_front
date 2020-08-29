import { Component, OnInit } from '@angular/core';
import {Game} from '../../../models/game.model';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {JoinGamePayload} from '../../../models/payload-models/join-game-payload.model';
import {ApiCall} from '../../../models/api-call.model';
import {Globals} from '../../../common/globals';
import {PlayerContextService} from '../../../services/player-context.service';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-join-game-modal',
  templateUrl: './join-game-modal.component.html',
  styleUrls: ['./join-game-modal.component.scss']
})
export class JoinGameModalComponent implements OnInit {

  game: Game;
  editForm: FormGroup;
  isLoading: boolean;
  joinGamePayload: JoinGamePayload;
  apiCall: ApiCall;

  constructor(public modal: NgbActiveModal,
              private formBuilder: FormBuilder,
              private playerContext: PlayerContextService,
              private apiService: ApiService) { }

  ngOnInit(): void {
    console.log(this.game);
    this.setForm();
  }

  onSubmit(): void{
    if (this.editForm.invalid || this.isLoading){
      return;
    }
    this.joinGamePayload = new JoinGamePayload(this.editForm.value.gid, this.editForm.value.pinCode);
    this.apiCall = new ApiCall(Globals.apiKey, Globals.joinGameCall, this.joinGamePayload, this.playerContext.getCurrentPlayer());
    this.isLoading = true;
    this.apiService.getData(this.apiCall).subscribe(x => {
      console.log(x);
      this.isLoading = false;
      if (x.data === undefined) {
        console.log('FALSE!');
        this.modal.close(false);
      }
      this.modal.close(true);
    }, error => {
      console.log(error);
      this.isLoading = false;
    });
  }

  get editFormData(): object { return this.editForm.controls; }

  private setForm(): void{
    this.editForm = this.formBuilder.group({
      name: [this.game.name],
      gid: [this.game.gid],
      pinCode: [this.game.pinCode, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(10)])]
    });
  }

}
