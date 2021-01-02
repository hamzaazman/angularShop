import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[ProductService]
})
export class ProductsComponent implements OnInit {

  constructor(private alertifyService: AlertifyService, private productService:ProductService) { }
  title = "Ürün Listesi"
  filterText = ""

  products: Product[];

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>{
      this.products = data;
    });
  }

  AddToCart(product) {
    this.alertifyService.success(product.name + " added")
  }


}
