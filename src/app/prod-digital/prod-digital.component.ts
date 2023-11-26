import { Component, OnInit } from '@angular/core';
import { ProdDigitalService } from './prod-digital.service';


@Component({
  selector: 'app-prod-digital',
  templateUrl: './prod-digital.component.html',
  styleUrls: ['./prod-digital.component.css']
})
export class ProdDigitalComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProdDigitalService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }
}