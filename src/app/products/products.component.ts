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
  filterText  = ""

  products : Product[] = [
    {name:"Laptop",description:"Lorem ipsum dolor sit amet",price:2500,categoryID:1,id:1,imageURL:"https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"},
    {name:"Telefon",description:"Lorem ipsum dolor sit amet",price:3600,categoryID:2,id:2,imageURL:"https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"},
    {name:"Dizüstü Bilgisayar",description:"Lorem ipsum dolor sit amet",price:2500,categoryID:1,id:1,imageURL:"https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"},
    {name:"Mouse",description:"Lorem ipsum dolor sit amet",price:3600,categoryID:2,id:2,imageURL:"https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"},
    {name:"Usb Bellek",description:"Lorem ipsum dolor sit amet",price:2500,categoryID:1,id:1,imageURL:"https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"},
    {name:"Mp3 Çalar",description:"Lorem ipsum dolor sit amet",price:3600,categoryID:2,id:2,imageURL:"https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"},
    {name:"Laptop",description:"Lorem ipsum dolor sit amet",price:2500,categoryID:1,id:1,imageURL:"https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"},
    {name:"Laptop",description:"Lorem ipsum dolor sit amet",price:2500,categoryID:1,id:1,imageURL:"https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"},

  ]
  

  ngOnInit(): void {
  }

  AddToCart(product){
    alert("Ürün eklendi: " + product.name)
  }


}
