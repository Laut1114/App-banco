import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInterface } from 'src/app/models/users';
import { UserService } from 'src/app/services/account/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  // displayedColumns: string[] = ['id', 'username', 'first_name', 'last_name', 'email', 'password', 'groups', 'user_permissions', 'is_staff', 'is_active', 'is_root', 'last_login', 'date_joined'];
  displayedColumns: string[] = ['id', 'username',  'first_name', 'last_name', 'email', 'groups', 'date_joined'];
  usuarios: UserInterface[] = [];

  opcion: string = "";

  constructor(private userService: UserService, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(_params => {
      this.opcion = _params['op'];
    })
  }

  ngOnInit(): void {
    if (this.opcion == "1") {
      this.getUsers()
    }
  }

  getUsers() {
    this.userService.getUsers().subscribe(res => {
      this.usuarios = res.result;
    });
  }

}
