export class SeatsCounterGraphDataModel {
  public freeSeats: number;
  public usedSeats: number;
  public totalSeats: number;
  public showText: boolean;

  constructor(freeSeats: number = 0, usedSeats: number = 0, showText: boolean = false) {
    this.freeSeats = freeSeats ?? 0;
    this.usedSeats = usedSeats ?? 0;
    this.totalSeats = freeSeats + usedSeats;
    this.showText = showText;
  }
}
