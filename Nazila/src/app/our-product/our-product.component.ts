import { Component } from '@angular/core';
import { IProducts } from '../IProducts';
import { products } from '../products';

@Component({
  selector: 'app-our-product',
  templateUrl: './our-product.component.html',
  styleUrls: ['./our-product.component.css']
})
export class OurProductComponent {
  ourProduct: IProducts[] = products;

}
