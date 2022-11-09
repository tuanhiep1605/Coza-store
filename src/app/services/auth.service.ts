import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private tokenKey: string = 'token';
  isLogIn() {
    let token = localStorage.getItem(this.tokenKey);
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  login(user: any) {
    return this.http.post('https://reqres.in/api/login', user);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  getToken() {
    let token = localStorage.getItem(this.tokenKey);
    if (token) {
      // Có thể trả về một Obj để chứa các thông tin người dùng và token.
      return token;
    } else {
      return false;
    }
  }
}
