import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lobby-body-players-container',
  templateUrl: './lobby-body-players-container.component.html',
  styleUrls: ['./lobby-body-players-container.component.scss']
})
export class LobbyBodyPlayersContainerComponent implements OnInit {
  @Input() playersInGame: Array<object> = [];
  playerObject: any;

  constructor() { }

  ngOnInit(): void {

  }

}
