import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TransaccionesComponent } from './pages/transacciones/transacciones.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
  },
  {
    path: 'transacciones',
    component: TransaccionesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
