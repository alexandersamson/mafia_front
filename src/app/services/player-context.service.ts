import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerContextService {

  constructor() { }

  public getCurrentPlayer(): object{
    //return null;
   return {name: 'Alexander', pid: '56498bec0082aa973269f43b88bff511499a19b53bdfd76720977d7e6714006a', gid: null};
}
}
