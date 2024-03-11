import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showMenu: boolean = false;
 
  
  constructor(private router:Router){
}

  scrollToSection(sectionId: string) {
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block:'nearest'});
      console.log(`Scrolling to section: ${sectionId}`)
    }
  }
  
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
