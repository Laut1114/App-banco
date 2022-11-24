import { Component, OnInit, Pipe } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      avatar: '',
      username: '',
      saldo: '',
      first_name: '',
      last_name: '',
      groups: 'cliente',
      email: ['', Validators.email],
      password: '',
      user_permissions: 'usuario',
      is_staff: 'false',
      is_root: 'false'
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

  fileInput(event: any) {
    this.file = event.target.files[0];
  }

  imgAvatar() {

    console.log(this.file.name);
    
    this.upload.subirArchivo(this.file).subscribe({
      next: () => {
        console.log(this.file);
        console.log('entro aca');
        
      }
    })

    // this.upload.userAvatar(this.username, this.file).subscribe({
    //   next: (res) => {
    //     console.log(res);
        
    //     console.log('entro aca');
    //     this.upload.getImg(this.username);
    //   }
    // })
  }

  // updateUser(userUpdate: UserInterface) {
  //   // this.upload.updAvatar(this.username!, this.file!);
  //   this.userService.updateUser(this.user[0].id, userUpdate).subscribe({
  //     next: () => {
  //       this.upload.subirArchivo(this.file);
  //       this.snackBar.open('Se actualizaron los datos', undefined, {duration: 1000});
  //     },
  //     error: (err) => {
  //       this.snackBar.open('Algo Salio mal', undefined, {duration: 1000});
  //       console.log(err);
  //     }
  //   });
  // }
}