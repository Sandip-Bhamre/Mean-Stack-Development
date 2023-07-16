import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  constructor(private userService: UserService) {}

  registerUser(): void {
    const user = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'password123',
    };

    this.userService.registerUser(user).subscribe(
      (response) => {
        console.log('User registered successfully', response);
        // Handle success case
      },
      (error) => {
        console.error('Error registering user', error);
        // Handle error case
      }
    );
  }

}
