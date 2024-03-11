import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../service/event.service';
import { Event } from '../../models/Event'; 

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {
 

  constructor(private route:ActivatedRoute,private router:Router, private service:EventService){}
  imageIndex: number = 1;

  eventId:number=0;
 event= new Event();

  ngOnInit(){
    this.event=new Event();
    this.eventId=this.route.snapshot.params['eventId'];
    
    this.service.getOneEvent(this.eventId).subscribe((data)=>{ 
      console.log(data);
      this.event=data});
  
  }

  list(){
    this.router.navigate(['list']);
  }
}

