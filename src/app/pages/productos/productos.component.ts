import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash, faSave, faTimes} from '@fortawesome/free-solid-svg-icons';
import { Producto } from '../../models/modelos.model';
import { ProductosService } from '../../service/productos.service';

@Component({
  selector: 'app-productos',
  imports: [FormsModule, FontAwesomeModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
    faEdit = faEdit;
    faTrash = faTrash;
    faSave = faSave;
    faTimes = faTimes;
  
    isEditing = false;
  
    data: any;
    product: Producto = new Producto();

    categorias: string[] = ['Bebidas', 'Comida', 'Electrónicos', 'Ropa', 'Hogar'];
  
    constructor(private productosService: ProductosService){
      this.getProducts();
    }
    validarCampos(): boolean {
      return (
        !this.product.nombre?.trim() ||
        !this.product.precio || this.product.precio <= 0 ||
        !this.product.categoria ||
        !this.product.stock || this.product.stock <= 0
      );
    }
  
    getProducts(): void {
      this.productosService.getProducts().subscribe(data => {
        this.data = data;
      });
    }
  
    addProduct(): void {
      if (this.validarCampos()) {
        alert('Todos los campos son obligatorios');
        return;
      }
      this.productosService.addProduct(this.product);
      this.clean();
      this.getProducts();
    }
  
    updateProduct(producto: Producto): void {
      if (this.validarCampos()) {
        alert('Todos los campos son obligatorios para actualizar');
        return;
      }
      this.productosService.updateProduct(producto);
      this.clean(); 
      this.getProducts();
    }
  
    deleteProduct(producto: Producto): void {
      this.productosService.deleteProduct(producto);
      this.getProducts();
    }
  
    seleccionarProducto(productoSeleccionado: Producto): void {
      this.isEditing = true;
      this.product = { ...productoSeleccionado };
    }
  
    clean(){
      this.product = new Producto();
    }
  
    cancelEdit(){
      this.isEditing = false;
      this.clean();
    }
}
