import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MailService } from './../../services/mail.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: any = {
    username: null,
    email: null,
    password: null,
    newsletter: true
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private mailService: MailService
    ) { }
  ngOnInit(): void {
  }

  async onSubmit(): Promise<any> {
    const { username, email, password, newsletter } = this.registerForm;

  this.authService.register(username, email, password, newsletter)
    .subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
