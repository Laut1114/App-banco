import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInterface } from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: UserInterface) {
    return this.http.post<any>('http://localhost:3000/api/auth/login', user);
  }

}
