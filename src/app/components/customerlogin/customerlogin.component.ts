import { Component } from '@angular/core';
import { CutomerloginService } from '../../service/cutomerlogin.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrl: './customerlogin.component.css'
})
export class CustomerloginComponent {

  customer: Customer = new Customer();
  isLoginMode = true;

  constructor(private customerService: CutomerloginService) {}

  onSubmit(): void {
    if (this.isLoginMode) {
      this.customerService.login(this.customer).subscribe(
        (response) => this.customerService.authenticate(response),
        (error) => console.error('Login failed:', error)
      );
    } else {
      this.customerService.signUp(this.customer).subscribe(
        (response) => this.customerService.authenticate(response),
        (error) => console.error('Signup failed:', error)
      );
    }
  }

  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }
}

