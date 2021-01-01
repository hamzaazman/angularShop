import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductFilterPipe } from './products/product-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavComponent,
    CategoryComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
