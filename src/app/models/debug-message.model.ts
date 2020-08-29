export class DebugMessage {
  public msgType: string;
  public message: string;
  public time: () => number;
  public pointer: number;
  constructor(msgType, message, pointer: number = null) {
    this.msgType = msgType;
    this.message = message;
    this.time =  Date.now = () => new Date().getTime();
    this.pointer = pointer;
  }
}
