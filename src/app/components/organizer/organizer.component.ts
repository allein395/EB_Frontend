import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizerService } from '../../service/organizer.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Organizer } from '../../models/Organizer';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrl: './organizer.component.css'
})
export class OrganizerComponent {
  org: Observable<Organizer[]>=of([]);
  
  displayedColumns: string[] = ['Id', 'Name', 'password'];
  dataSource= [] ;
 
  constructor(private router:Router,private service:OrganizerService,private http:HttpClient){
      }

      ngOnInit():void{
        this.service.getallOrg().subscribe((data:[])=>{
          this.dataSource=data;
          console.log(data);
        },(error:Error)=>{console.log(error)});
      
      }
 
  dashboard(){
    this.router.navigate(['adminview']);
  }
}
