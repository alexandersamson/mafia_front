export class Error {
  public error: string;
  public constructor(error: any) {
    this.error = error.error ?? '';
  }
}
