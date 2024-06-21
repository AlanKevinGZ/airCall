import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanelService {
private baseUrl="https://frontend-test-api.aircall.dev"
private http=inject(HttpClient);

  constructor() { }
  headers:any;
  
  getInfo() {
    return this.http.get<any>(`${this.baseUrl}/calls`);
  }

  getInfoId(id:string) {
    return this.http.get<any>(`${this.baseUrl}/calls/${id}`);
  }





}
