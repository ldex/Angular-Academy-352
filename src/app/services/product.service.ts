import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, shareReplay, tap } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable()
export class ProductService {

  private baseUrl = 'https://storerestservice.azurewebsites.net/api/products/';
  products$: Observable<Product[]>;

  constructor(
    private http: HttpClient
  ) {
    this.initProducts();
   }

   deleteProduct(id: number): Observable<Object> {
    return this.http.delete(this.baseUrl + id);
  }

   insertProduct(newProduct: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, newProduct);
  }

  initProducts() {
    let url:string = this.baseUrl + '?$orderby=ModifiedDate%20desc';

    this.products$ = this
                      .http
                      .get<Product[]>(url)
                      .pipe(
                        delay(1500), // Just for demo!!
                        tap(console.table),
                        shareReplay() // local cache
                      );
  }
}