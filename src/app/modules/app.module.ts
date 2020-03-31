import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';






import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { LayoutComponent } from '../layout/layout.component';
import { ServicioService } from '../services/servicio.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuariosComponent,
    LayoutComponent,
    
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }