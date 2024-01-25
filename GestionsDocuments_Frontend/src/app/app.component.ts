import { Component } from '@angular/core';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GestionsDocumentNg';
  status = false;
  selected = '';
  loggedIn = false;
  userName: string = '';
  role: string = '';

  constructor(private userService: UserService) {
    this.userService.userName$.subscribe(userName => {
      this.userName = userName;
    });
    
    this.userService.Role$.subscribe(role => {
      this.role = role;
    });
  }

  addToggle()
  {
    this.status = !this.status;       
  }



  onLoginSuccess(): void {
    this.loggedIn = true;
  }
  
}
