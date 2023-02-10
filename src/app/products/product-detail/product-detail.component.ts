import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  product: Product;

  delete() {
    if(window.confirm('Are you sure ?')) {
      this
      .productService
      .deleteProduct(this.product.id)
      .subscribe(
        () => {
          console.log('Product was deleted on the server.');
          this.productService.initProducts();
          this.router.navigateByUrl('/products');
        }
      )
    }
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    let id = this.activatedRoute.snapshot.params.id;

    this
      .productService
      .products$
      .pipe(
        map(products => products.find(product => product.id == id))
      )
      .subscribe(
        result => this.product = result
      )
  }

}
