import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from '../guards/auth.guard';
import { LoginComponent } from '../login/login.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';

//import { UsuarioComponent } from './usuario/usuario.component';





const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'usuarios', component: UsuariosComponent,}, //canActivate: [AuthGuard] },
  //{ path: 'usuario', component: UsuarioComponent,}//canActivate: [AuthGuard]}
 
]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }