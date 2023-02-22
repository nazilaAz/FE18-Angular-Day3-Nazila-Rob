import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurProductComponent } from './our-product/our-product.component';

const routes: Routes = [
  {path:"", component:OurProductComponent},
  {path:"**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
