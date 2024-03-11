import { Component } from '@angular/core';
import { Event } from '../../models/Event';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../service/event.service';

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrl: './event-update.component.css'
})
export class EventUpdateComponent {
  eventId:number=0;
  event: Event = new Event();
 
  
  constructor(private route:ActivatedRoute,private router:Router,private service:EventService){
  
  }
  
  ngOnInit(){
    this.event=new Event();
    this.eventId=this.route.snapshot.params['playerId'];
    console.log(this.eventId);
  
    this.service.getOneEvent(this.eventId).subscribe((data)=>{
      console.log(data);
      this.event=data;
    })
  }
  
  onSubmit()
  {
    // this.updateDetails();
  }
  
  // updateDetails(){
  //   this.service.updateEvent(this.e).subscribe((data)=>{
  // //    this.player=new Player();
  //     this.goto();
  //   })
  // }
  
  goto(){
    this.router.navigate(['list']);
  }
  }
  

