import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseUrl='http://localhost:8080';

  constructor(private http:HttpClient){}


  createvent(event: Object):Observable<Object> {
    console.log("inside service add")
    return this.http.post(`${this.baseUrl}/events/addEvent`,event);
  }

getAllEvents():any{
return this.http.get(`${this.baseUrl}/events/getallevent`);
}

deleteEvent(id:number):Observable<any>{
  console.log("inside service delete")
  return this.http.delete(`${this.baseUrl}/events/delete/${id}`,{responseType:'text'});
 }

 getOneEvent(id:number):Observable<any>{
  console.log("inside service get one ");
  return this.http.get(`${this.baseUrl}/events/getevent/${id}`);
 }

updateEvent(event:Event){
return this.http.put(`${this.baseUrl}/events/update`,event)
}


createventcat(eventcat: Object):Observable<Object> {
  console.log("inside service addcat")
  return this.http.post(`${this.baseUrl}/eventcategories/addeventcat`,eventcat);
  }

getAllCategory():any
  {
    return this.http.get(`${this.baseUrl}/eventcategories/getalleventcat`);
  }

  deleteEventCat(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/eventcategories/deleteventcat/${id}`, { responseType: 'text' });
  }
}