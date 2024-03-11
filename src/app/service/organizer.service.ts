import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrganizerService {

  baseUrl='http://localhost:8080';

  constructor(private http:HttpClient){}

  getallOrg():any
  {
    return this.http.get(`${this.baseUrl}/organizers/getallorg`);
}
}
