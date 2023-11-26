import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private httpClient: HttpClient) {}
  username: string = '';
  password: string = '';

  login() {
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);

    const loginData = {
      username: this.username,
      password: this.password,
    };

    this.httpClient
      .post('http://localhost:8080/clients/login', loginData)
      .subscribe((data: any) => {
        console.log('Respuesta del servidor', data);
        if (data.message === 'OK') {
          this.router.navigate(['/principal']);
        } else {
          alert('Usuario o contraseña incorrectos');
        }
      });
  }
}
