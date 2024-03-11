import { Injectable } from '@angular/core';
import { PopupProfileComponent } from '../components/popup-profile/popup-profile.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

 constructor(private dialog: MatDialog) {}

openUserProfileDialog(user: any): void {
  this.dialog.open(PopupProfileComponent, {
    width: '400px',
    data: user
  });
}
}
