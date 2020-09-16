import {Component, Input, OnInit} from '@angular/core';
import {SeatsCounterGraphDataModel} from '../../../models/generic-models/seats-counter-graph-data.model';

@Component({
  selector: 'app-seats-counter-graph',
  templateUrl: './seats-counter-graph.component.html',
  styleUrls: ['./seats-counter-graph.component.scss']
})
export class SeatsCounterGraphComponent implements OnInit {
  @Input() graphData: SeatsCounterGraphDataModel;
  public changeText: boolean;

  constructor() {
    this.changeText = false;
  }

  ngOnInit(): void {
  }

}
