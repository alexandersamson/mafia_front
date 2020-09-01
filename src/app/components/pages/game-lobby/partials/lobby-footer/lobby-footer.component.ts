import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../../../services/api.service';
import {Globals} from '../../../../../common/globals';

@Component({
  selector: 'app-lobby-footer',
  templateUrl: './lobby-footer.component.html',
  styleUrls: ['./lobby-footer.component.scss']
})
export class LobbyFooterComponent implements OnInit {
  public version = '';
  public apiLink = Globals.apiURL;
  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
  }

}
