import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorysService {

  constructor(private http: HttpClient) { }

  getAllCategory(){
    return this.http.get<[]>('https://fakestoreapi.com/products/categories');
  }
}
