import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor() { }
  async sendEmail(formData: FormData): Promise<Response> {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });
    return response;
  } catch (error) {
    throw new Error('Failed to send email');
  }
}

}
