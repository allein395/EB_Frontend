import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customeradmin',
  templateUrl: './customeradmin.component.html',
  styleUrl: './customeradmin.component.css'
})
export class CustomeradminComponent {
  customer: Observable<Customer[]>=of([]);

  displayedColumns: string[] = ['Id', 'Name', 'password', 'email'];
  dataSource= [] ;

  constructor(private router:Router,private service:CustomerService,private http:HttpClient){
  }

  ngOnInit():void{
    this.service.getallCusto().subscribe((data:[])=>{
      this.dataSource=data;
      console.log(data);
    },(error:Error)=>{console.log(error)});
  
  }
getallCusto()  {
this.getallCusto();
} 

dashboard(){
  this.router.navigate(['']);
}
}
