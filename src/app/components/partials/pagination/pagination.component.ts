import { Component, OnInit, Input } from '@angular/core';
import {Pagination} from '../../../models/pagination.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() pagination: Pagination;

  constructor() {
  }

  ngOnInit(): void {
  }

}
