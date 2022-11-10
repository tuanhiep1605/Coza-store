import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { Product, ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss'],
})
export class DetailProductComponent implements OnInit {

  product: any;
  rate: number = 0;
  isReadonly = true;
  max = 5;

  counter: number = 1;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.productService.getProduct(id).subscribe(
      (res: any) => {
        this.product = res;
        this.rate = this.product.rating.rate.toFixed();
        console.log(this.rate);
      },

      (err) => {}
    );
  }

  btnIncrease(eventObj: any) {
    this.counter += 1;

  }

  btnMinus() {
    this.counter <= 0 ? 0 : (this.counter -= 1);
  }
}
