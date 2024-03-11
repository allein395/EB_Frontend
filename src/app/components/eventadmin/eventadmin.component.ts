import { Component } from '@angular/core';
import { EventService } from '../../service/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-eventadmin',
  templateUrl: './eventadmin.component.html',
  styleUrl: './eventadmin.component.css'
})
export class EventadminComponent {
  searchText = '';
  event: Observable<Event[]>=of([]);
  
  displayedColumns: string[] = ['Id', 'Event', 'Capacity', 'Location'];
  dataSource= [] ;
 
  constructor(private route:ActivatedRoute,private router:Router,private service:EventService,private http:HttpClient){
      }

      ngOnInit():void{
        this.service.getAllEvents().subscribe((data:[])=>{
          this.dataSource=data;
          console.log(data);
        },(error:Error)=>{console.log(error)});
      
      }
  getallEvents()  {
    this.getallEvents();
  }  
  dashboard(){
    this.router.navigate(['']);
  }

}
