import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  // displayedColumns: string[] = ['id', 'username', 'first_name', 'last_name', 'email', 'password', 'groups', 'user_permissions', 'is_staff', 'is_active', 'is_root', 'last_login', 'date_joined'];
  displayedColumns: string[] = ['id', 'username',  'first_name', 'last_name', 'email', 'groups', 'date_joined'];
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
