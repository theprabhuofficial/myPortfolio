import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.css'
})
export class PreloaderComponent implements OnInit{

  @Input() isLoading:boolean=false;
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  



}
