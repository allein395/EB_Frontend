import { Component } from '@angular/core';
import { PopupProfileComponent } from '../popup-profile/popup-profile.component';
import { MatDialog } from '@angular/material/dialog';
import { ProfileService } from '../../service/profile.service';
import { Customer } from '../../models/customer';
import { EventService } from '../../service/event.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Event } from '../../models/Event';

@Component({
  selector: 'app-custofront',
  templateUrl: './custofront.component.html',
  styleUrl: './custofront.component.css'
})
export class CustofrontComponent {


  event: Observable<Event[]>=of([]);

  constructor(private service:EventService, private router:Router){}

  ngOnInit(){
    this.getAll();
  }

  getAll(){
    this.event = this.service.getAllEvents();
  }

}

