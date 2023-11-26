import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CarritoComponent } from './carrito/carrito.component';
import { RegistroComponent } from './registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesComponent } from './services/services.component';
import { ProdDigitalComponent } from './prod-digital/prod-digital.component';
import { ProdPublicitarioComponent } from './prod-publicitario/prod-publicitario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarritoComponent,
    RegistroComponent,
    ServicesComponent,
    ProdDigitalComponent,
    ProdPublicitarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
