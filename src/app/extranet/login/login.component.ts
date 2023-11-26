import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  login() {
    // Aquí puedes implementar la lógica de inicio de sesión
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
    // Lógica adicional...
  }
}
