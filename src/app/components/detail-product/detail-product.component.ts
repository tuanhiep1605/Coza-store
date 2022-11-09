import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Product, ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
 product:any;
  constructor(private activityrouter : ActivatedRoute, private productservice: ProductsService) { }
  
  ngOnInit(): void {
    let id =this.activityrouter.snapshot.params['id'];
    this.productservice.getProductById(id).subscribe(
      (res: any)=>{
      console.log("res", res);
      this.product=res;
      console.log("product", this.product);
    },
      (err)=>{

      }
    )
  }

}
