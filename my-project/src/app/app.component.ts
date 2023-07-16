import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project';

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
