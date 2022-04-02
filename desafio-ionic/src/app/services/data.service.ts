import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient.model';
export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  protected http: HttpClient;

  constructor(private httpClient: HttpClient) { }

  getPatients(gender: string = null, nat: string = null): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>('https://randomuser.me/api?results=50&' + "gender=" + gender + "&nat=" + nat)
      .pipe();
  }
}