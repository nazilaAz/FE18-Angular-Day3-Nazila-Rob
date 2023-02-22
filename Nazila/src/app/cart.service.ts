import { Injectable } from '@angular/core';
import { IProducts } from './IProducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<IProducts> = [];
  constructor() { }

  addToCartasService(productDetailsPushToCart: IProducts) {
    this.cart.push(productDetailsPushToCart);
  }

  getCart() {
    return this.cart;
  }

  clearCart(){
    this.cart=[];
    return this.cart;
  }
}
