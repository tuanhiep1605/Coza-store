import { Component, OnInit } from '@angular/core';
import { pipe, Subject } from 'rxjs';
import { CategorysService } from 'src/app/services/categorys.service';
import { Product, ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  products1:Product[]=[];

  categorys:any;
  products:Product[]=[];
  public search = '';
  public fitercontrol = new Subject<string>();

  constructor(
    private productservice: ProductsService,
    private categoryservice: CategorysService,
    ) { }

  ngOnInit(): void {

    this.fitercontrol.pipe().subscribe((data=>{

      this.search =  data.trim().toLocaleLowerCase();
      this.products = this.products1.filter(element=>element.title.toString().toLowerCase().includes(this.search))
      console.log('aaa')
    }) )
    
    console.log(this.fitercontrol)
    

    this.productservice.getAllProduct().subscribe(
      (res: Product[]) => {
        
        this.products = res;
        this.products1 = this.products
      },
        (err)=>{
  
      }
    );
    this.categoryservice.getAllCategory().subscribe(
      (res:[]) => {
        this.categorys =res;
      },
        (err)=>{
          console.log("get category err",err)
      }
    );
 
  }

  getProductByCategory(category:any){

   
    this.productservice.getProductByCategory(category).subscribe((res: Product[])=>{
      console.log("res",res)
      console.log("product",this.products);
      console.log("category",category);
      
      if(category){
        this.products = res
      } 

    },(err)=>{
      console.log("all",err)
    })
  }


  getproductpage1(page:number,limit:number){
    console.log('page');
    this.productservice.getProductByPage(limit).subscribe(
      (res: Product[]) => {
        if(this.products){
        let i=0;
        let arr :Product[] =[];
        if(page===1){
          arr  = res.filter(item => item.id <=10);
        }
        if(page===2){
          arr  = res.filter(item => item.id <=20);
          arr= arr.slice(10);
        }
        if(page===3){
          arr  = res.filter(item => item.id <=30);
          arr= arr.slice(20);
        }
        console.log("item:",arr );
          while (this.products.length) {
            // Remove elements from array
            this.products.pop();
          }
        for(i = 0; i < arr.length; i++) {
          this.products.push(arr[i])
          }
    }else{
      this.products = res;
    }
    },
      (err)=>{
        console.log("err");
    }
    );
  }


}
