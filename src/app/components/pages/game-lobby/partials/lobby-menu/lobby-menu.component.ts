import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lobby-menu',
  templateUrl: './lobby-menu.component.html',
  styleUrls: ['./lobby-menu.component.scss']
})
export class LobbyMenuComponent implements OnInit {

  active: number;
  constructor() { }

  ngOnInit(): void {
  }

}
