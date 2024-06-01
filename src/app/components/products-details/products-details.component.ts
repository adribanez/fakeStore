import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit{
  product : any = {}
  id : string = ""

  constructor(private productsService : ProductsService, private route : ActivatedRoute){
    this.route.params.subscribe((params)=>{
      this.id = params["id"]

    })
  }

  ngOnInit(): void {
    this.productsService.getProductsById(this.id).subscribe((response)=>{
      this.product = response
    })
  }

}
