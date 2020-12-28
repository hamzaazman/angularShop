import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText ?: string): Product[] {
    filterText=filterText?filterText.toLocaleLowerCase():null//Bir data varsa filtrele ve küçük harfe çevir.Yoksa null döndür.

    return filterText ? value.filter((p:Product) =>p.name.toLocaleLowerCase().indexOf(filterText)!== -1):value;
  }

}
