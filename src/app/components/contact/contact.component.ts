import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MailService } from '../../services/mail.service';
import { environment } from '../../../environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email_id:String="bhagyashri16t@gmail.com";
  userForm: FormGroup;

  alertMessage: string | undefined;
  color: string | undefined;
  onSubmit: boolean | undefined;
  showAlert: boolean | undefined;
  isFormValid = true;
  isFormSubmittedSuccessfully = false;

  constructor(private http: HttpClient, private mailService: MailService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      id: ['0'],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  async onSaveUser() {
    this.onSubmit = true;

    if (this.userForm.valid) { // Check if the form is valid
      const formData: FormData = new FormData();
      formData.append('name', this.userForm.get('name')?.value || '');
      formData.append('email', this.userForm.get('email')?.value || '');
      formData.append('body', this.userForm.get('message')?.value || '');
      formData.append('access_key', environment.form_access_key);
      formData.append('subject', 'Email Support From Your Site');
      formData.append('from_name', 'Contact Notification');

      try {
        const res = await this.mailService.sendEmail(formData);
        console.log(res); // Log the response for debugging
        if (!res.ok) {
            throw new Error();
        }
        this.alertMessage = 'Email sent successfully!';
        this.isFormSubmittedSuccessfully = true;
        this.userForm.reset();
        this.showAlert = true; // Set showAlert to true inside try block
        this.hideAlert();
    } catch (err) {
      this.isFormSubmittedSuccessfully = false;
        this.alertMessage = 'Something went wrong, try again later!';
        this.showAlert = true; // Set showAlert to true inside catch block
        this.hideAlert();
    }

    this.onSubmit = false;
}
}

hideAlert() {
  setTimeout(() => {
    this.showAlert = false; 
  }, 5000);
}
  
  
}
