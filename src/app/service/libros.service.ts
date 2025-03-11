import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { first } from 'rxjs';
import { Libro } from '../models/modelos.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private db: Firestore = inject(Firestore);
  
  constructor() { }
  
  //Métodos
  getBooks() {
    const librosCollection = collection(this.db, 'libros');
    return collectionData(librosCollection, { idField: 'id' }).pipe(first());
  }  

  updateBook(libro: Libro){
    const libroDocument = doc(this.db, 'libros', libro.id);
    updateDoc(libroDocument, {
      titulo: libro.titulo,
      autor: libro.autor,
      editorial: libro.editorial,
      anioPublicacion: libro.anioPublicacion
    });
  }

  addBook(libro: Libro){
    const librosCollection = collection(this.db, 'libros');
    const libroData = {
      titulo: libro.titulo,
      autor: libro.autor,
      editorial: libro.editorial,
      anioPublicacion: libro.anioPublicacion
    };
    addDoc(librosCollection, libroData);
  }

  deleteBook(libro: Libro){
    const libroDocument = doc(this.db, 'libros', libro.id);
    deleteDoc(libroDocument);
  }
}
