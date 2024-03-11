import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrollController } from './components/scroll-controller/scroll-controller.component';
import { NavheaderComponent } from './components/navheader/navheader.component';
import { EventsectionComponent } from './components/eventsection/eventsection.component';
import { LoginComponent } from './components/login/login.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventUpdateComponent } from './components/event-update/event-update.component';
import { EventlistComponent } from './components/eventlist/eventlist.component';
import { CustofrontComponent } from './components/custofront/custofront.component';
import { AddeventcatComponent } from './components/addeventcat/addeventcat.component';
import { ListeventcatComponent } from './components/listeventcat/listeventcat.component';
import { CustomerloginComponent } from './components/customerlogin/customerlogin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrganizerloginComponent } from './components/organizerlogin/organizerlogin.component';
import { OrganizerViewComponent } from './components/organizer-view/organizer-view.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminviewComponent } from './components/adminview/adminview.component';
import { EventadminComponent } from './components/eventadmin/eventadmin.component';
import { CustomeradminComponent } from './components/customeradmin/customeradmin.component';
import { OrganizerComponent } from './components/organizer/organizer.component';


const routes: Routes = [
  {
path:'home',
component:CustofrontComponent
  },
{
  path:'login',
  component:LoginComponent
},
{
  path:'addEvent',
  component:AddEventComponent
},

{
  path:'list',
  component:EventlistComponent
},
{
  path:'navhead',
  component:NavheaderComponent
},
{
  path:'navbar',
  component:NavbarComponent
},
{
  path:'details/:eventId',
  component:EventDetailsComponent
},
{
  path:'update/:eventId',
  component:EventUpdateComponent
},
{
  path:'addcat',
  component:AddeventcatComponent
},
{
  path:'catlist',
  component:ListeventcatComponent
},
{
  path:'custologin',
  component:CustomerloginComponent
},
{
path:'adminlogin',
component:AdminloginComponent
},
{
  path:'custofront',
  component:CustofrontComponent
},
{
  path:'adminview',
  component:AdminviewComponent
},
{
  path:'customeradmin',
  component:CustomeradminComponent
},
{
  path:'orglist',
  component:OrganizerComponent
},
{
  path:'orglogin',
  component:OrganizerloginComponent
},
{
  path:'orgview',
  component:OrganizerViewComponent
},
{
  path:'eventadminlist',
  component:EventadminComponent
}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
