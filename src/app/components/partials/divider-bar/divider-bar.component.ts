import {Component, Input, OnInit} from '@angular/core';
import {ProgressBar} from '../../../models/progress-bar.model';

@Component({
  selector: 'app-divider-bar',
  templateUrl: './divider-bar.component.html',
  styleUrls: ['./divider-bar.component.scss']
})
export class DividerBarComponent implements OnInit {
  @Input() barData: Array<ProgressBar>;
  @Input() height = 24;
  @Input() width = '100%';

  constructor() { }

  ngOnInit(): void {
  }

}
