import { Component, OnInit } from '@angular/core';
import {PlayerContextService} from '../../../services/player-context.service';
import {Router} from '@angular/router';
import {Globals} from '../../../common/globals';

@Component({
  selector: 'app-nav-main-menu',
  templateUrl: './nav-main-menu.component.html',
  styleUrls: ['./nav-main-menu.component.scss']
})
export class NavMainMenuComponent implements OnInit {

  active = 1;
  isInGame = false;
  isLoggedIn = false;

  constructor(private playerContextService: PlayerContextService, private router: Router) { }

  ngOnInit(): void {
    this.playerContextService.checkForPlayerLogin().subscribe();
  }

  isInGameLobby(): boolean{
    return this.router.url.startsWith('/' + Globals.gameLobbyPage);
  }

}
