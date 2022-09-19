import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>('http://localhost:3000/api/users');
  }

  addUser(user: UserInterface) {
    return this.http.post<any>('http://localhost:3000/api/users/add', user);
  }

  updateUser(id: number, user: UserInterface) {
    return this.http.put<any>(`http://localhost:3000/api/users/update/${id}`, user);
  }

  async deleteUser(id: number) {
    return this.http.delete(`http://localhost:3000/api/users/delete/${id}`)
  }
}
