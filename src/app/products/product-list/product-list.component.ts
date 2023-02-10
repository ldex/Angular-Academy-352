import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  title: string = 'Products';
  //products: Product[];
  products$: Observable<Product[]> = this.productService.products$;
  selectedProduct: Product;

  // Pagination
  pageSize = 5;
  start = 0;
  end = this.pageSize;

  previousPage() {
    this.start -= this.pageSize;
    this.end -= this.pageSize;
  }

  nextPage() {
    this.start += this.pageSize;
    this.end += this.pageSize;
  }

  onSelect(product: Product) {
    this.selectedProduct = product;
  }

  constructor(
    private productService: ProductService
  ) {
    // productService
    //   .products$
    //   .subscribe(
    //     results => this.products = results
    //   )
  }

}
