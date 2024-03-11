import { Component } from '@angular/core';
import { Organizer } from '../../models/Organizer';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { OrganizerloginService } from '../../service/organizerlogin.service';

@Component({
  selector: 'app-organizerlogin',
  templateUrl: './organizerlogin.component.html',
  styleUrl: './organizerlogin.component.css'
})
export class OrganizerloginComponent {
  organizer:Organizer=new Organizer();
  isLoginMode = true;
  constructor(private organizerService: OrganizerloginService) {}

  onSubmit(): void {
    if (this.isLoginMode) {
      this.organizerService.login(this.organizer).subscribe(
        (response) => this.organizerService.authenticate(response),
        (error) => console.error('Login failed:', error)
      );
    } else {
      this.organizerService.signUp(this.organizer).subscribe(
        (response) => this.organizerService.authenticate(response),
        (error) => console.error('Signup failed:', error)
      );
    }
  }

  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }
}
