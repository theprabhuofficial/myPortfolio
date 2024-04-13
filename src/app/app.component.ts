import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { delay, take } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'TechEnthusiast';
  isLoading=true;
  
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
    
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
