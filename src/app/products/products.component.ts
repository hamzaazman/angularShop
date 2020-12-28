import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  title = "Ürün Listesi"
  products : any[] = [
    {name:"Laptop",description:"Lorem ipsum dolor sit amet",price:2500,categoryID:1,id:1},
    {name:"Telefon",description:"Lorem ipsum dolor sit amet",price:3600,categoryID:2,id:2}
  ]

  ngOnInit(): void {
  }

}
