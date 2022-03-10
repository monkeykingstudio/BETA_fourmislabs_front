import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: any = {
    username: null,
    email: null,
    password: null,
    newsletter: true
  };
  isSignUpFailed = false;
  errorMessage = '';

  constructor(public authService: AuthService) { }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.authService.removeIsSuccesfull();
  }

  onSubmit(): void {
    const { username, email, password, newsletter } = this.registerForm;

  this.authService.register(username, email, password, newsletter)
    .subscribe(
      data => {
        this.isSignUpFailed = false;
        this.authService.setIsSuccesfull;
        console.log('user data: ',data);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }


  public signupWithGoogle(): void {
    this.authService.googleRegister();
  }
}
