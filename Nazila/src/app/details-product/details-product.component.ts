import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
// import { switchMap } from 'rxjs/operators';

import { IProducts } from '../IProducts';
import { products } from '../products';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  productDetail: IProducts = {} as IProducts;
  id: number = 0;

  constructor(
    private route: ActivatedRoute
    
  ) { }

  ngOnInit(){
   
    this.route.params.subscribe((params:Params) => {
      // console.log(params);
      this.id = +params['id'];
      this.productDetail=products[this.id];
      // console.log(this.productDetail);
//  
    });
  }
}
