import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserInterface } from 'src/app/models/users';
import { UserService } from 'src/app/services/account/user.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { UploadService } from 'src/app/services/uploads/upload.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  username = localStorage.getItem('username');

  user: UserInterface[] = [];

  snackBarHorizontal: MatSnackBarHorizontalPosition = 'center';
  snackBarVertical: MatSnackBarVerticalPosition = 'top';

  formUser!: FormGroup;
  hide: boolean = true;

  file: File | undefined;

  constructor(private fb: FormBuilder, private userService: UserService, private upload: UploadService, private snackBar: MatSnackBar) {
    this.formUser = this.fb.group({
      id: [''],
      username: [''],
      first_name: [''],
      last_name: [''],
      groups: ['cliente'],
      email: [''],
      password: [''],
      user_permissions: ['usuario'],
      is_staff: ['false'],
      is_root: ['false']
    });
  }

  ngOnInit(): void {
    this.getUserData(this.username!);
  }

  getUserData(username: string) {
    this.userService.getUser(undefined, username).subscribe(res => {

      if (res.result.length < 1) {
        console.log("No se trajo los datos del usuario");
      }

      return this.user = res.result;

    });
  }

  handleFileInput(event: any) {
    this.file = event.target.files[0];

    console.log(this.file);
    
  }

  userAvatar() {
    this.upload.updAvatar(this.username!, this.file!)
  }

}
