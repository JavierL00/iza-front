import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) { }
  username: string = '';
  password: string = '';

  title = 'iza-front';
  login() {
    // Resto del código de inicio de sesión
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
    this.router.navigate(['/carrito']);
    // Lógica adicional...
  }
}
