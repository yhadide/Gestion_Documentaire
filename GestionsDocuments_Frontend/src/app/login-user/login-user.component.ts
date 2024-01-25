import { Component, EventEmitter, Output } from '@angular/core';
import { UtilisateursService } from '../Services/utilisateurs.service';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

interface LoginData {
  email: string;
  motDePasse: string;
}

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  loginData: LoginData = { email: '', motDePasse: '' }; 
  @Output() loginSuccess: EventEmitter<void> = new EventEmitter<void>();

  constructor(private utilisateursService: UtilisateursService, private userService: UserService, private router: Router) { }

  loginUser(): void {
    this.utilisateursService.findByEmailAndPassword(this.loginData.email, this.loginData.motDePasse).subscribe(
      user => {
        console.log('Logged in:', user.nomUtilisateur);
        this.userService.setUserNameRole(user.nomUtilisateur,user.role); // Set the user's name
        this.loginSuccess.emit();
        this.router.navigate(['/dashboard']);
      },
      error => {
        // Handle login error
        if (error.status === 500) {
          console.error('Server error:', error.error.message);
        } else {
          console.error('Login error:', error);
        }
      }
    );
  }
}
