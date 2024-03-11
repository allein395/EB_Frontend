import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-popup-profile',
  templateUrl: './popup-profile.component.html',
  styleUrl: './popup-profile.component.css'
})
export class PopupProfileComponent {

  constructor(
    public dialogRef: MatDialogRef<PopupProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

}
