import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from '../models/Admin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  private baseUrl = 'http://localhost:8080';
   private isAuthenticated = false;

   constructor(private router: Router, private http: HttpClient) {}
 
   signUp(admin: Admin): Observable<Admin> {
     return this.http.post<Admin>(`${this.baseUrl}/admins/register`, admin);
   }
 
   login(admin: Admin): Observable<Admin> {
     return this.http.post<Admin>(`${this.baseUrl}/admins/login`, admin);
   }
  
 
   authenticate(response: Admin): void {
     console.log('Authentication successful:', response);
     this.isAuthenticated = true;
     this.router.navigate(['/adminview']);
   }
 
   logout(): void {
     this.isAuthenticated = false;
     this.router.navigate(['/login']);
   }
 
   getIsAuthenticated(): boolean {
     return this.isAuthenticated;
   }

}
