import { Component } from '@angular/core';
interface CartItem {
  nombre: string;
  cantidad: number;
  precio: number;
}
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  cartItems:any;
  constructor() {
    this.cartItems = [
      {
        "nombre": "Roll screen",
        "cantidad":1,
        "precio": 50.00
      },
      {
        "nombre": "Folder Corporativo",
        "cantidad":1,
        "precio": 12
      },
      {
        "nombre": "Bolsa (ecologica)",
        "cantidad":1,
        "precio": 4
      },
      {
        "nombre": "Bolsa (personalizada)",
        "cantidad":1,
        "precio": 6
      },
      {
        "nombre": "Lapiceros Ecologicos",
        "cantidad":1,
        "precio": 2
      },
    ];
  }

  increaseQuantity(item: CartItem) {
    item.cantidad++;
  }

  decreaseQuantity(item: CartItem) {
    if (item.cantidad > 1) {
      item.cantidad--;
    }
  }

  calculateTotal(): number {
    return this.cartItems.reduce((total: number, item: CartItem) => total + (item.precio * item.cantidad), 0);
  }

}
