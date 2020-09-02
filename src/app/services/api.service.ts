import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable, of, partition} from 'rxjs';
import { ApiCall } from '../models/api-call.model';
import { Globals } from '../common/globals';
import { map } from 'rxjs/operators';
import {Package, PackageAdapter} from '../models/package.model';
import {DebugMessageService} from './debug-message.service';
import {PlayerCookiesService} from './player-cookies.service';
import {Meta} from '../models/payload-models/meta.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = Globals.apiURL;
  errorMessages = new BehaviorSubject<Error[]>([null]);
  private meta: Meta = new Meta({apiName: null, apiLink: null, version: null, timestamp: null});

  constructor(
    private http: HttpClient,
    private adapter: PackageAdapter,
    private debugMsgService: DebugMessageService,
    private playerCookiesService: PlayerCookiesService
  ) {}

  getData(apiCall: ApiCall): Observable<Package>{
    apiCall.playerToken = this.playerCookiesService.getPlayerToken();
    return this.http.post(this.url, JSON.stringify(apiCall)).pipe(
      map((data: Package) => {
        this.debugMsgService.addMessagesToBuffer(data.messages);
        if (data.error){
            this.errorMessages.next(data.error as Error[]);
            console.log(data.error);
        }
        if (data.meta){
          this.meta = new Meta(data.meta);
        }
        return this.adapter.adapt(data);
      }));
  }

  getApiKey(): Observable<any>{
    const headers = new HttpHeaders().append('header', 'value');
    const params = new HttpParams().append('get_public_api_key', 'true');
    return this.http.get(Globals.apiURL, {params}).pipe(
      map(x => Globals.apiKey = x[Globals.dataField][0])
    );
  }

  getApiVersion(): Observable<string>{
    return of(this.meta.apiName);
  }

  getTimestamp(): Observable<number>{
    return of(this.meta.timestamp);
  }
}
