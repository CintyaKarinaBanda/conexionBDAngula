import { Routes } from '@angular/router';
import { LibrosComponent } from './pages/libros/libros.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { JournalingComponent } from './pages/journaling/journaling.component';

export const routes: Routes = [
    { path: 'libros', component: LibrosComponent },
    { path: 'about', component: AboutComponent},
    { path: 'products', component: ProductosComponent },
    { path: 'journaling', component: JournalingComponent },
];
