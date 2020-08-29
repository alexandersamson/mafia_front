import { Injectable } from '@angular/core';
import {DebugMessage} from '../models/debug-message.model';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DebugMessageService {
  debugMessages: DebugMessage[];
  debugMessageStack: Array<DebugMessage> = [];
  pointer = 1;
  maxMessages = 100;
  constructor() { }

  public addMessagesToBuffer($messages): void{
      $messages.forEach(x => {
        this.debugMessageStack[this.pointer] = (new DebugMessage(x.type, x.message));
        this.debugMessageStack[0] = new DebugMessage(null, null, this.pointer);
        this.pointer += 1;
        if (this.pointer > this.maxMessages){this.pointer = 1; }
      });
      this.messagesToObserverable();
  }

  public messagesToObserverable(){
    let i;
    let pointer = this.pointer;
    let messages: Array<DebugMessage>;
    messages = [];
    for (i = 0; i < (this.debugMessageStack.length - 1); i++) {
      pointer -= 1;
      if (pointer < 1){pointer = this.maxMessages; }
      messages[i] = this.debugMessageStack[pointer];
    }
    return of(messages);
  }
}
