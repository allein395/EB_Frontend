import { Component } from '@angular/core';
import { EventService } from '../../service/event.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EventCategory } from '../../models/Category';

@Component({
  selector: 'app-listeventcat',
  templateUrl: './listeventcat.component.html',
  styleUrl: './listeventcat.component.css'
})
export class ListeventcatComponent {

public eventcat:Observable<EventCategory[]>=of([]);

  constructor(private service:EventService,private router:Router){}

  ngOnInit()
  {
    
    this.getAll();
  }


  getAll() {
    this.eventcat = this.service.getAllCategory();
  }

  deleteFarmer(id:number)
{
  return this.service.deleteEventCat(id).subscribe((data)=>{
    console.log(data);
    this.getAll();
    })

  }

  gotolist(){
    this.router.navigate(['list']);
  }

}
