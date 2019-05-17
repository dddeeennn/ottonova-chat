import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
/*
* Simply stores auth info during app life.
*/
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;
  user: string;

  constructor(private router: Router) { }

  login(login: string, password: string): Promise<boolean> {
    this.user = login;
    this.isAuthenticated = true;
    return this.router.navigateByUrl('/');
  }

  logout(): Promise<void> {
    return this.router.navigate(['login']).then(() => {
      this.isAuthenticated = false;
      this.user = null;
    });
  }
}
