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

  // Scrolls to a specific element and updates the URL
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Update URL based on the elementId
      switch (elementId) {
        case 'home':
          this.router.navigate(['/home']);
          break;
        case 'education':
          this.router.navigate(['/home/education']);
          break;
        case 'skill':
          this.router.navigate(['/home/skill']);
          break;
        case 'project':
          this.router.navigate(['/home/project']);
          break;
        case 'experience':
          this.router.navigate(['/home/experience']);
          break;
        case 'contact':
          this.router.navigate(['/home/contact']);
          break;
        
        // add more cases as needed for other sections
      }

      this.setActive(elementId); // Update active link
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
