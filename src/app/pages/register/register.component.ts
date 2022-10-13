import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInterface } from 'src/app/models/users';
import { UserService } from 'src/app/services/account/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide: boolean = true;

  formRegister!: FormGroup;
  user: UserInterface[] = [];

  constructor(private registerService: UserService, private fb: FormBuilder) { 
    this.formRegister = this.fb.group({
      username: ['', Validators.required],
      first_name: [''],
      last_name: [''],
      groups: ['', Validators.required],
      email: [''],
      password: ['', Validators.required],
      user_permissions: ['', Validators.required],
      is_staff: ['false', Validators.required],
      is_root: ['false', Validators.required]
    });
  }

  ngOnInit(): void {}

  register(user: UserInterface) {
    this.registerService.addUser(user).subscribe(() => {
      console.log("listo")
    })
  }
}
