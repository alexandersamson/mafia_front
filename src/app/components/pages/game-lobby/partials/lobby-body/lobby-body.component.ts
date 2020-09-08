import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lobby-body',
  templateUrl: './lobby-body.component.html',
  styleUrls: ['./lobby-body.component.scss']
})
export class LobbyBodyComponent implements OnInit {
  activeSubLink = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
