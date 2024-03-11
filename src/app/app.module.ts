import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { EventsectionComponent } from './components/eventsection/eventsection.component';
import { NavheaderComponent } from './components/navheader/navheader.component';

import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { CustofrontComponent } from './components/custofront/custofront.component';
import { PopupProfileComponent } from './components/popup-profile/popup-profile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './components/login/login.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { HttpClientModule } from '@angular/common/http';
import { EventlistComponent } from './components/eventlist/eventlist.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventUpdateComponent } from './components/event-update/event-update.component';
import { AddeventcatComponent } from './components/addeventcat/addeventcat.component';
import { ListeventcatComponent } from './components/listeventcat/listeventcat.component';
import { CustomerloginComponent } from './components/customerlogin/customerlogin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrganizerloginComponent } from './components/organizerlogin/organizerlogin.component';
import { OrganizerViewComponent } from './components/organizer-view/organizer-view.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminviewComponent } from './components/adminview/adminview.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { EventadminComponent } from './components/eventadmin/eventadmin.component';
import {MatTableModule} from '@angular/material/table';
import { CustomeradminComponent } from './components/customeradmin/customeradmin.component';
import { OrganizerComponent } from './components/organizer/organizer.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    EventsectionComponent,
    NavheaderComponent,
    FooterComponent,
   CustofrontComponent,
   PopupProfileComponent,
   LoginComponent,
   AddEventComponent,
   EventlistComponent,
   EventDetailsComponent,
   EventUpdateComponent,
   AddeventcatComponent,
   ListeventcatComponent,
   CustomerloginComponent,
   OrganizerloginComponent,
   NavbarComponent,
   OrganizerViewComponent,
   AdminloginComponent,
   AdminviewComponent,
   EventadminComponent,
   CustomeradminComponent,
   OrganizerComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
