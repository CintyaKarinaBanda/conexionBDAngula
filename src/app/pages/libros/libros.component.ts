import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Libro } from '../../models/modelos.model';
import { LibrosService } from '../../service/libros.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash, faSave, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-libros',
  imports: [FormsModule, FontAwesomeModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {
  faEdit = faEdit;
  faTrash = faTrash;
  faSave = faSave;
  faTimes = faTimes;

  isEditing = false;

  data: any;
  book: Libro = new Libro();

  constructor(private librosService: LibrosService){
    this.getBooks();
  }
  validarCampos(): boolean {
    return (
      !this.book.titulo?.trim() ||
      !this.book.autor?.trim() ||
      !this.book.editorial?.trim() ||
      !this.book.anioPublicacion || this.book.anioPublicacion <= 0
    );
  }

  getBooks(): void {
    this.librosService.getBooks().subscribe(data => {
      this.data = data;
    });
  }

  addBook(): void {
    if (this.validarCampos()) {
      alert('Todos los campos son obligatorios');
      return;
    }
    this.librosService.addBook(this.book);
    this.clean();
    this.getBooks();
  }

  updateBook(libro: Libro): void {
    if (this.validarCampos()) {
      alert('Todos los campos son obligatorios para actualizar');
      return;
    }
    this.librosService.updateBook(libro);
    this.clean(); 
    this.getBooks();
  }

  deleteBook(libro: Libro): void {
    this.librosService.deleteBook(libro);
    this.getBooks();
  }

  seleccionarLibro(libroSeleccionado: Libro): void {
    this.isEditing = true;
    this.book = { ...libroSeleccionado };
  }

  clean(){
    this.book = new Libro();
  }

  cancelEdit(){
    this.isEditing = false;
    this.clean();
  }
}
