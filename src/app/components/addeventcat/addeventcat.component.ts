import { Component } from '@angular/core';
import { EventService } from '../../service/event.service';
import { Router } from '@angular/router';
import { EventCategory } from '../../models/Category';

@Component({
  selector: 'app-addeventcat',
  templateUrl: './addeventcat.component.html',
  styleUrl: './addeventcat.component.css'
})
export class AddeventcatComponent {

  submitted=false;
  eventcat=new EventCategory(); 

  constructor(private service:EventService,private router: Router){}

  

  onSubmit()
  {
    this.submitted=true;
   
    this.save();
  }

  save()
  {
    this.service.createventcat(this.eventcat).subscribe();
  }
}