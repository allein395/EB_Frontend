import { Injectable } from '@angular/core';
import { Organizer } from '../models/Organizer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrganizerloginService {

  private baseUrl = 'http://localhost:8080';
  private isAuthenticated = false;

  constructor(private router: Router, private http: HttpClient) {}

  signUp(organizer: Organizer): Observable<Organizer> {
    return this.http.post<Organizer>(`${this.baseUrl}/organizers/register`, organizer);
  }

  login(organizer: Organizer): Observable<Organizer> {
    return this.http.post<Organizer>(`${this.baseUrl}/organizers/login`, organizer);
  }
 

  authenticate(response: Organizer): void {
    console.log('Authentication successful:', response);
    this.isAuthenticated = true;
   //  this.router.navigate(['/dashboard']);
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
   }

}
