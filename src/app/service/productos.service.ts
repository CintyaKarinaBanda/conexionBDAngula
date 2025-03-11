import { inject, Injectable } from '@angular/core';
import {addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc, } from '@angular/fire/firestore';
import { first } from 'rxjs';
import { Producto } from '../models/modelos.model';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private db: Firestore = inject(Firestore);

  constructor() {}

  //Métodos
  getProducts() {
    const productosCollection = collection(this.db, 'productos');
    return collectionData(productosCollection, { idField: 'id' }).pipe(first());
  }

  updateProduct(producto: Producto) {
    const productoDocument = doc(this.db, 'productos', producto.id);
    updateDoc(productoDocument, {
      nombre: producto.nombre,
      precio: producto.precio,
      categoria: producto.categoria,
      stock: producto.stock,
    });
  }

  addProduct(producto: Producto) {
    const productosCollection = collection(this.db, 'productos');
    const productoData = {
      nombre: producto.nombre,
      precio: producto.precio,
      categoria: producto.categoria,
      stock: producto.stock,
    };
    addDoc(productosCollection, productoData);
  }

  deleteProduct(producto: Producto) {
    const productoDocument = doc(this.db, 'productos', producto.id);
    deleteDoc(productoDocument);
  }
}
