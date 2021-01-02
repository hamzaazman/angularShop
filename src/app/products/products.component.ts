import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private alertifyService: AlertifyService, private http: HttpClient) { }
  title = "Ürün Listesi"
  filterText = ""

  products: Product[];
  path = "http://localhost:3000/products"

  ngOnInit(): void {
    this.http.get<Product[]>(this.path).subscribe(data => {
      this.products = data
    });
  }

  AddToCart(product) {
    this.alertifyService.success(product.name + " added")
  }


}
