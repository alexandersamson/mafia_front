import { Component, OnInit } from '@angular/core';
import {Globals} from '../../../common/globals';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  apiUrl = Globals.apiURL;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isInGameLobby(): boolean{
    return this.router.url.startsWith('/' + Globals.gameLobbyPage);
  }

}
