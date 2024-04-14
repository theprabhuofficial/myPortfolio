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
