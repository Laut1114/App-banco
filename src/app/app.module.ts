// MODULOS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

// COMPONENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { TransaccionesComponent } from './pages/transacciones/transacciones.component';

// ANGULAR MATERIALS COMPONENTS
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './pages/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { RegisterComponent } from './pages/register/register.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuariosComponent,
    TransaccionesComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
