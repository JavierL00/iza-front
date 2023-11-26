// login.component.ts

import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }
  username: string = '';
  password: string = '';

  login() {
    // Resto del código de inicio de sesión
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
    this.router.navigate(['/carrito']);
    // Lógica adicional...
  }
}
