import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) { }

  onLoginClick(login: string, password: string): void {
    const result = this.authService.login(login, password);
    if (result) {
      this.router.navigateByUrl('/');
    }
  }
}
