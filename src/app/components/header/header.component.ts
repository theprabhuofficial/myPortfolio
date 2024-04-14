import { Component } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router){}
  mymail="bhagyashri16t@gmail.com";
  activeLink: string = ''; //active link
  
  //after click on education button it redirect to education compopent within same page and also url will be update according to education component
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.router.navigate(['/home/education']); // Adjust the URL without navigating away from the current view
    }
  }
  //active link on navigation 
  setActive(link: string): void {
    this.activeLink = link;
  }

  //url change link
  navigate(){
    this.router.navigate(['/home'])
  }
  toggleMenu() {
    const menu = document.getElementById('navbar-dropdown');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  }
}
