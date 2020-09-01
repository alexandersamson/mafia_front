import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of, partition} from 'rxjs';
import { ApiCall } from '../models/api-call.model';
import { Globals } from '../common/globals';
import { map } from 'rxjs/operators';
import {Package, PackageAdapter} from '../models/package.model';
import {DebugMessageService} from './debug-message.service';
import {PlayerCookiesService} from './player-cookies.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = Globals.apiURL;
  private apiVersion = '';

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
        if (data.meta.version){
          this.apiVersion = data.meta.version;
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
    return of(this.apiVersion);
  }
}
