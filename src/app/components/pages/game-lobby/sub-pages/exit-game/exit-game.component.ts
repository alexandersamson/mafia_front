import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-exit-game',
  templateUrl: './exit-game.component.html',
  styleUrls: ['./exit-game.component.scss']
})
export class ExitGameComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  ngOnConfirmLeave(){
    this.router.navigate(['home']);
  }

  ngOnConfirmExitGame(){
    this.router.navigate(['home']);
  }

}
