import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { first } from 'rxjs';
import { Journaling } from '../models/modelos.model';

@Injectable({
  providedIn: 'root'
})
export class JournalingService {

  private db: Firestore = inject(Firestore);

  constructor() { }

  //Métodos
  getBooks() {
    const librosCollection = collection(this.db, 'journaling');    
    return collectionData(librosCollection, { idField: 'id' }).pipe(first());
  }

  updateBook(libro: Journaling) {
    const libroDocument = doc(this.db, 'journaling', libro.id);
    updateDoc(libroDocument, {
      titulo: libro.titulo,
      autor: libro.autor,
      puntuacion: libro.puntuacion,
      genero: libro.genero
    });
  }

  addBook(libro: Journaling) {
    console.log(libro);
    
    const librosCollection = collection(this.db, 'journaling');
    const libroData = {
      titulo: libro.titulo,
      autor: libro.autor,
      puntuacion: libro.puntuacion,
      genero: libro.genero
    };
    addDoc(librosCollection, libroData);
  }

  deleteBook(libro: Journaling) {
    const libroDocument = doc(this.db, 'journaling', libro.id);
    deleteDoc(libroDocument);
  }
}
