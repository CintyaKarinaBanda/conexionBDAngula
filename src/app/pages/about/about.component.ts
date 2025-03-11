import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  developer={
    nombre: 'Cintya Karina',
    apellidos: 'Banda González',
    edad: '21',
    lenguajes: {
      JavaScript:'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', 
      TypeScript:'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg', 
      Python:'https://cdn.iconscout.com/icon/free/png-512/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-3030224.png?f=webp&w=512', 
      'C++':'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
    },
  }
}
