import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../models/users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'password', 'avatar', 'rol', 'email'];
  usuarios: UserInterface[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(res => {
      this.usuarios = res.result;
    });
  }

}
