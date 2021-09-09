import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Circuit } from './circuits/circuits.model';

@Injectable({
  providedIn: 'root'
})
export class CircuitsService {

  constructor(private httpClient: HttpClient) { }

  fetchCircuits(): Observable<Circuit[]> {
    return this.httpClient.get<any>(environment.api + '/circuits');
  }

  fetchSeasons(): Observable<any> {
    return this.httpClient.get<any>(environment.api + '/seasons');
  }

  fatchRaces(query: any): Observable<any> {
    const params = new HttpParams({ fromObject: query });
    console.log('params : ', params);
    return this.httpClient.get<any>(environment.api + '/races', { params: params });
  }
  fatchRankings(query: any): Observable<any> {
    const params = new HttpParams({ fromObject: query });
    console.log('params : ', params);
    return this.httpClient.get<any>(environment.api + '/rankings/races', { params: params });
  }
  fetchDriver(query: any): Observable<any> {
    const params = new HttpParams({ fromObject: query });
    console.log('params : ', params);
    return this.httpClient.get<any>(environment.api + '/drivers', { params: params });
  }
}