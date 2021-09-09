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

  fetchCircuitsApi(): Observable<Circuit[]> {
    return this.httpClient.get<any>(environment.api + '/circuits');
  }

  fetchSeasonsApi(): Observable<any> {
    return this.httpClient.get<any>(environment.api + '/seasons');
  }

  fatchRacesApi(query: any): Observable<any> {
    const params = new HttpParams({ fromObject: query });
    console.log('params : ', params);
    return this.httpClient.get<any>(environment.api + '/races', { params: params });
  }
  fatchRankingsApi(query: any): Observable<any> {
    const params = new HttpParams({ fromObject: query });
    console.log('params : ', params);
    return this.httpClient.get<any>(environment.api + '/rankings/races', { params: params });
  }
  fetchDriverApi(query: any): Observable<any> {
    const params = new HttpParams({ fromObject: query });
    console.log('params : ', params);
    return this.httpClient.get<any>(environment.api + '/drivers', { params: params });
  }
}