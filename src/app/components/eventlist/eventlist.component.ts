import { Component, Input } from '@angular/core';
import { Event } from '../../models/Event';
import { Observable, of } from 'rxjs';
import { EventService } from '../../service/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrl: './eventlist.component.css'
})
export class EventlistComponent {


  event: Observable<Event[]>=of([]);

  constructor(private service:EventService, private router:Router){}

  ngOnInit(){
    this.getAll();
  }

  getAll(){
    this.event = this.service.getAllEvents();
  }

  deleteEvent(id:number){
    return this.service.deleteEvent(id).subscribe((data)=>{
      console.log(data);
      this.getAll;
    })
  }

 eventDetails(id:number){
    this.router.navigate(['details',id]);
  }

  updateEvent(id:number){
    this.router.navigate(['update',id]);
  }

  
}



