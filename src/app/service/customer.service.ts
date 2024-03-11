import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl='http://localhost:8080';

  constructor(private http:HttpClient){}

  getallCusto():any
  {
    return this.http.get(`${this.baseUrl}/customers/getAllCustomer`);
  }
}
