import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent
  ],
  exports: [ProductListComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [ProductService]
})
export class ProductsModule { }
