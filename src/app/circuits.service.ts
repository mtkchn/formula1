import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CircuitsService {
  
  constructor(private httpClient: HttpClient) { }

  fetchCircuits(): Observable<any> {

    return this.httpClient.get<any>(environment.api + '/circuits');
  }

}