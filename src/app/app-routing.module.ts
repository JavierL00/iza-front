// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./extranet/login/login.component";
import {CarritoComponent} from "./extranet/carrito/carrito.component";
import {PrincipalComponent} from "./extranet/principal/principal.component";
import {RegistroComponent} from "./extranet/registro/registro.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'registro', component: RegistroComponent },
  // Puedes agregar más rutas aquí según sea necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
