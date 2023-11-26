// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CarritoComponent } from './carrito/carrito.component';
import { RegistroComponent } from './registro/registro.component';
import { ServicesComponent } from './services/services.component';
import { ProdPublicitarioComponent } from './prod-publicitario/prod-publicitario.component';
import { ProdDigitalComponent } from './prod-digital/prod-digital.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'principal', component: ServicesComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'prodPublicitario', component: ProdPublicitarioComponent },
  { path: 'prodDigital', component: ProdDigitalComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
