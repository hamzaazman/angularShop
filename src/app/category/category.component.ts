import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title="Kategori Listesi";
  categories : Category[] = [
    {id:1,name:"Elektronik"},
    {id:2,name:"Ev Eşyaları"},
    {id:3,name:"Temizlik Eşyaları"},
    {id:4,name:"Yemek ve İçecek"},
  ]

  ngOnInit(): void {
  }

}
