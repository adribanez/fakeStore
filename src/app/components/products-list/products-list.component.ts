import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() productosQueRecibeElHijo : any = [];
  @Output() emisorDeProductosElegidos : EventEmitter <any> = new EventEmitter();

  productsList : any = []

  constructor(private productsService : ProductsService){

  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((response : any)=>{

// console.log(response);

      this.productsList = response

    })
  }

  addProduct(product : any){
    console.log("Producto añadido al carrito", product);
    
    this.emisorDeProductosElegidos.emit(product)
  }

  public modoNoche = false;
  public styles = {
    'background-color': 'black'
  }

  handleModoNoche(){
    this.modoNoche = !this.modoNoche
  }

}
