import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number| any,
  title: string,
  price:number,
  description:string,
  category:[],
  image:string,
  rating:{
    rate:number,
    count:number
  };
}


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url ='https://fakestoreapi.com/products';
  
  constructor(private http:HttpClient ) { }
  
  getAllProduct(): Observable<Product[]> {
    return  this.http.get<Product[]>(this.url);
  }

  getProductById(id: number):Observable<Product[]> {
    return this.http.get<Product[]>(this.url+"/"+id);
  }

  getProductByPage(limit: number):Observable<Product[]>{
    return this.http.get<Product[]>(this.url)
  }

  getProductByCategory(category: string):Observable<Product[]>{
    return this.http.get<Product[]>("https://fakestoreapi.com/products/category/"+category);
  }
}
