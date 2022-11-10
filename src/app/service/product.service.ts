import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface Product {
  id?: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: any;
  rating: {
    rate: number;
    count: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];

  constructor(private http: HttpClient) {}
  private baseURL = 'https://fakestoreapi.com';
  getProduct(id: number) {
    return this.http.get(this.baseURL + '/products/' + id);
  }
}
