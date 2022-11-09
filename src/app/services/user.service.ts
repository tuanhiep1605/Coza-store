import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface User {
  id?: number;
  name: [
    {
      firstName: string;
      lastName: string;
    }
  ];
  email: string;
  address: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserInfo(id: any) {
    this.http.get(`https://reqres.in/api/users/${id}`);
  }
}
