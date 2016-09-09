import { Component } from '@angular/core';
import { SecondComponentComponent } from './second-component';
import { Producto } from './producto';
import { PRODUCTOS } from './mocks';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[ SecondComponentComponent ]
})
export class AppComponent {
  title = 'app worksssssssssss!';
  productos: Producto [];

  ngOnInit(){
    this.productos = PRODUCTOS
  }

  addProduct(producto){
    if( producto.quantity < producto.stock) producto.quantity ++
  }

  removeProduct(producto){
    if(producto.quantity > 0) producto.quantity --
  }

  total(){
    let total = 0
    for(let product of this.productos){
      let sum = product.price*product.quantity
      total += sum
    }
    return total 
  }

  remain(producto){
    let restan
    restan = producto.stock - producto.quantity
    return restan
  }

}
