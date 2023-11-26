import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  fullName: string = '';
  email: string = '';
  username: string = '';
  password: string = '';

  register() {
    // Aquí puedes implementar la lógica de registro, como enviar los datos al servidor
    console.log('Registro realizado con éxito!');
  }
}
