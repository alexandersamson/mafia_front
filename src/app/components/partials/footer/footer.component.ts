import { Component, OnInit } from '@angular/core';
import {Globals} from '../../../common/globals';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  apiUrl = Globals.apiURL;
  constructor() { }

  ngOnInit(): void {
  }

}
