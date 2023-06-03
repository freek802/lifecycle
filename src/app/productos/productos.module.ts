import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductComponent } from './pages/product/product.component';
import { PriceComponent } from './components/price/price.component';


@NgModule({
  declarations: [
    ProductComponent,
    PriceComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
