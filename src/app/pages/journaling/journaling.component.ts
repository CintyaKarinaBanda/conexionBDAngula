import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faSave, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Journaling } from '../../models/modelos.model';
import { JournalingService } from '../../service/journaling.service';

@Component({
  selector: 'app-journaling',
  imports: [FormsModule, FontAwesomeModule],
  templateUrl: './journaling.component.html',
  styleUrl: './journaling.component.css'
})
export class JournalingComponent {
  faEdit = faEdit;
  faTrash = faTrash;
  faSave = faSave;
  faTimes = faTimes;

  isEditing = false;

  data: any;
  book: Journaling = new Journaling();

  constructor(private journalingService: JournalingService){
    this.getBooks();
  }
  validarCampos(): boolean {
    return (
      !this.book.titulo?.trim() ||
      !this.book.autor?.trim() ||
      !this.book.genero?.trim() ||
      !this.book.puntuacion || this.book.puntuacion <= 0 || this.book.puntuacion > 5
    );
  }

  getBooks(): void {
    this.journalingService.getBooks().subscribe(data => {
      this.data = data;
    });
  }

  addBook(): void {
    if (this.validarCampos()) {
      alert('Todos los campos son obligatorios y ocupan ser valores validos');
      return;
    }
    console.log(this.book);
    
    this.journalingService.addBook(this.book);
    this.clean();
    this.getBooks();
  }

  updateBook(libro: Journaling): void {
    if (this.validarCampos()) {
      alert('Todos los campos son obligatorios para actualizar y deben ser valores validos');
      return;
    }
    this.journalingService.updateBook(libro);
    this.clean(); 
    this.getBooks();
  }

  deleteBook(libro: Journaling): void {
    this.journalingService.deleteBook(libro);
    this.getBooks();
  }

  seleccionarLibro(libroSeleccionado: Journaling): void {
    this.isEditing = true;
    this.book = { ...libroSeleccionado };
  }

  clean(){
    this.book = new Journaling();
  }

  cancelEdit(){
    this.isEditing = false;
    this.clean();
  }

  getStars(puntuation: number): string {
    return '★'.repeat(puntuation); 
  }
}
