import {Component, OnInit} from '@angular/core';
import {Pagination} from '../../../models/pagination.model';

@Component({
  selector: 'app-public-games',
  templateUrl: './public-games.component.html',
  styleUrls: ['./public-games.component.scss']
})
export class PublicGamesComponent implements OnInit {
  pagination: Pagination;

  constructor() { }

  setPagination(pagination: Pagination): void {
     this.pagination = pagination;
  }

  ngOnInit(): void {
  }

}
