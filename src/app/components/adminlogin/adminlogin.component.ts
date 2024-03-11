import { Component } from '@angular/core';
import { Admin } from '../../models/Admin';
import { AdminloginService } from '../../service/adminlogin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  admin: Admin = new Admin();
  isLoginMode = true;

  constructor(private adminService: AdminloginService) {}

  onSubmit(): void {
    if (this.isLoginMode) {
      this.adminService.login(this.admin).subscribe(
        (response) => this.adminService.authenticate(response),
        (error) => console.error('Login failed:', error)
      );
    } else {
      this.adminService.signUp(this.admin).subscribe(
        (response) => this.adminService.authenticate(response),
        (error) => console.error('Signup failed:', error)
      );
    }
  }

  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }
}
