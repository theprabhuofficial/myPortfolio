import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { delay, take } from 'rxjs/operators';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'TechEnthusiast';
  isLoading=true;
  showHead: boolean = false;
  
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
    
  }



  constructor(private router: Router) {
  // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/leetcode') {
          this.showHead = false;
        } else {
          // console.log("NU")
          this.showHead = true;
        }
      }
    });
  }
//   hideAnimatedDiv() {
//     let animatedDiv:any = document.getElementById('scroll-animation');
//     animatedDiv.style.display = 'block';
//     setTimeout(() => {
//       console.log('hide');
//       animatedDiv.style.display = 'none';
//     }, 3000);
//  }
 
}
