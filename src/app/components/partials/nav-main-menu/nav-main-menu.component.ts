import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-main-menu',
  templateUrl: './nav-main-menu.component.html',
  styleUrls: ['./nav-main-menu.component.scss']
})
export class NavMainMenuComponent implements OnInit {

  active = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
