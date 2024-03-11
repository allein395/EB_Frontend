import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CutomerloginService {

  private baseUrl = 'http://localhost:8080';
  private isAuthenticated = false;

  constructor(private router: Router, private http: HttpClient) {}

  signUp(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.baseUrl}/customers/register`, customer);
  }
  

  login(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.baseUrl}/customers/login`, customer);
  }
 

  authenticate(response: Customer): void {
    console.log('Authentication successful:', response);
    this.isAuthenticated = true;
   //  this.router.navigate(['/dashboard']);
  }

  logout():void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
   }
}