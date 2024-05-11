import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  email_id="bhagyashri16t@gmail.com";

  userForm:FormGroup=new FormGroup({
    id:new FormControl('0'),
    name:new FormControl(''),
    email:new FormControl(''),
    message:new FormControl(''),
  })

  constructor(private http:HttpClient){}

  onSaveUser(){
    // debugger;
    const obj=this.userForm.value;
    // this.http.post('https://jsonplaceholder.typicode.com/posts',obj).subscribe((res:any)=>{
    //     alert('user created')
    // })
  }
}
