import { Component, OnInit ,ViewChild,ElementRef } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    
  @ViewChild('myUser', {static: true}) myUser: ElementRef;
  @ViewChild('myPass', {static: true}) myPass: ElementRef;
  constructor(private router: Router) {
    
   } 

  usuarioOriginal = "test";
  contrasenaOriginal = "Ayi+2020";
  ngOnInit(): void {
    
  }
  Validar() {
    
    let inputValue = this.myUser.nativeElement.value;
    let passValuer = this.myPass.nativeElement.value;
    if(inputValue == this.usuarioOriginal && passValuer == this.contrasenaOriginal)
    {
      alert('Usuario correcto')
      this.router.navigateByUrl('/usuarios');
    }
    else{
      alert('Inicie sesion')
    }    
    
    }
  
  login(){    
   
  }

}