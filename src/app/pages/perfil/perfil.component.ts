import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  accent = "#F0F8FF";

  formUser!: FormGroup;
  hide: boolean = true;

  constructor(private fb: FormBuilder) {
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
  }

}
