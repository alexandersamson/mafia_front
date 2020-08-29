import { Component, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreatePlayerPayload} from '../../../models/payload-models/create-player-payload.model';
import {ApiCall} from '../../../models/api-call.model';
import {Globals} from '../../../common/globals';
import {PlayerContextService} from '../../../services/player-context.service';
import {ApiService} from '../../../services/api.service';
import {CurrentPlayer} from '../../../models/current-player.model';

@Component({
  selector: 'app-create-player-modal',
  templateUrl: './create-player-modal.component.html',
  styleUrls: ['./create-player-modal.component.scss']
})
export class CreatePlayerModalComponent implements OnInit {

  currentPlayer: CurrentPlayer;
  createPlayerForm: FormGroup;
  isLoading: boolean;
  createPlayerPayload: CreatePlayerPayload;
  apiCall: ApiCall;

  constructor(public modal: NgbActiveModal,
              private formBuilder: FormBuilder,
              private playerContext: PlayerContextService,
              private apiService: ApiService) { }

  ngOnInit(): void {
    console.log(this.currentPlayer);
    this.setForm();
  }

  onSubmit(): void{
    if (this.createPlayerForm.invalid || this.isLoading){
      return;
    }
    this.createPlayerPayload = new CreatePlayerPayload(this.createPlayerForm.value.name);
    this.apiCall = new ApiCall(Globals.apiKey, Globals.createPlayerCall, this.createPlayerPayload, null);
    this.isLoading = true;
    this.apiService.getData(this.apiCall).subscribe(x => {
      console.log(x);
      this.isLoading = false;
      this.modal.close();
    }, error => {
      console.log(error);
      this.isLoading = false;
    });
  }

  get createPlayerFormData(): object { return this.createPlayerForm.controls; }

  private setForm(): void{
    this.createPlayerForm = this.formBuilder.group({
      name: [this.currentPlayer.name, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
    });
  }

}
