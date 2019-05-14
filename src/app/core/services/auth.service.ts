import { Injectable } from '@angular/core';
/*
* Simply stores auth info during app life.
*/
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;
  user: string;

  constructor() { }

  login(login: string, password: string): boolean {
    this.user = login;
    this.isAuthenticated = true;
    return true;
  }
}
