
import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leetcode-home',
  templateUrl: './leetcode-home.component.html',
  styleUrl: './leetcode-home.component.css'
})
export class LeetcodeHomeComponent {

  constructor(private router: Router,) { }
  
  back_to_home(){
    this.router.navigateByUrl("/")
  }
}
