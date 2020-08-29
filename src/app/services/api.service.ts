import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, partition} from 'rxjs';
import { ApiCall } from '../models/api-call.model';
import { Globals } from '../common/globals';
import { map } from 'rxjs/operators';
import {Package, PackageAdapter} from '../models/package.model';
import {DebugMessageService} from './debug-message.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = Globals.apiURL;

  constructor(private http: HttpClient, private adapter: PackageAdapter, private debugMsgService: DebugMessageService) {
  }

  getData(apiCall: ApiCall): Observable<Package>{
    return this.http.post(this.url, JSON.stringify(apiCall)).pipe(
      map((data: Package) => {
        this.debugMsgService.addMessagesToBuffer(data.messages);
        return this.adapter.adapt(data);
      }));
  }
}
