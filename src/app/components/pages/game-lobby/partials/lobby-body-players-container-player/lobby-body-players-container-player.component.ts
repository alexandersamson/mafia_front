import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lobby-body-players-container-player',
  templateUrl: './lobby-body-players-container-player.component.html',
  styleUrls: ['./lobby-body-players-container-player.component.scss']
})
export class LobbyBodyPlayersContainerPlayerComponent implements OnInit {
  @Input() player: any;
  constructor() { }

  ngOnInit(): void {
  }

}
