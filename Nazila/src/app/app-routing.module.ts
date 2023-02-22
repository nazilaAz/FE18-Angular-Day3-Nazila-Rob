import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OurProductComponent } from './our-product/our-product.component';

const routes: Routes = [
  {path:"", component:HomepageComponent},
  {path:"product", component:OurProductComponent},
  {path:"product/:id", component:DetailsProductComponent},
  {path:"cart",component:CartComponent},
  {path:"**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
