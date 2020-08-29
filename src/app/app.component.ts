import {Component, OnInit} from '@angular/core';
import { ApiService } from './services/api.service';
import {Game} from './models/game.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private apiService: ApiService) {
  }
  title = 'mafia-front-end';
  messages: Array<object>;
  data: Array<object>;

  ngOnInit(): void{
  }
}
