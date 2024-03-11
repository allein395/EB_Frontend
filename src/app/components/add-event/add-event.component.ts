import { Component } from '@angular/core';
import { EventService } from '../../service/event.service';
import { Event } from '../../models/Event';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {
  submitted=false;
  event=new Event();

  constructor(private service:EventService)
  {}
  onSubmit(){
    this.save();
    this.submitted=true;
  }
  save(){
    this.service.createvent(this.event).subscribe();
  }

}
