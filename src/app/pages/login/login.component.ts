import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;

  formLogin!: FormGroup;

  constructor(private loginService: AuthService, private fb: FormBuilder) { 
    this.formLogin = this.fb.group ({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  login(username: string, password: string) {
    this.loginService.login(username, password).subscribe(() => {
      console.log("listo")
    })
  }
}
