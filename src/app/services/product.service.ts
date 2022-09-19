import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsInterface } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>('http://localhost:3000/api/products');
  }

  addProduct(product: ProductsInterface) {
    return this.http.post<any>('http://localhost:3000/api/products/add', product);
  }

  updateProduct(id: number, product: ProductsInterface) {
    return this.http.put<any>(`http://localhost:3000/api/products/update/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/api/products/delete/${id}`)
  }
}