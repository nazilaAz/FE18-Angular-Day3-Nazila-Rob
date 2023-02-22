import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { IProducts } from '../IProducts';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(
    private cartService: CartService
  ) { }
  cart: Array<IProducts> = [];
ngOnInit():void{
  this.cart=this.cartService.getCart();
}
}
