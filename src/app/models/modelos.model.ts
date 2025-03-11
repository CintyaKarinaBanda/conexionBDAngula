export class Libro{
    id!: string;
    titulo!: string;
    autor!: string;
    editorial!: string;
    anioPublicacion!: number;
}

export class Producto{
    id!: string;
    nombre!: string;
    precio!: number;
    categoria!: string;
    stock!: number;
}

export class Journaling{
    id!: string;
    titulo!: string;
    genero!: string;
    autor!: string;
    puntuacion!: number;
}