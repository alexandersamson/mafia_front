import { Injectable } from '@angular/core';
import {ProgressBar} from '../models/progress-bar.model';

@Injectable({
  providedIn: 'root'
})
export class PowerLevelsToProgressService {

  private total: number;
  private tempCounter: number;
  private fractions: Array<ProgressBar>;

  constructor() {

  }

  getProgressBarData(dataArray: Array<any>): Array<any>{
    this.total = 0;
    this.tempCounter = 0;
    this.fractions = [];
    dataArray.sort((x, y) => x.listPriority - y.listPriority);
    dataArray.forEach(x => this.total += x.powerLevel);
    dataArray.forEach(x => {
      this.fractions.push({name: x.name, value: x.powerLevel, color: x.color, previous: this.tempCounter, fraction: (x.powerLevel / this.total) * 100});
      this.tempCounter += (x.powerLevel / this.total) * 100;
    });
    return this.fractions;
  }
}
