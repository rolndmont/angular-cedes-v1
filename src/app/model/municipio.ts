export interface Municipio {
    idR: number,
    id: number,
    nombre: string,
    imagen: string,
    descripcion: string,
    extension: string,
    clima: string,
    recursos: string,
    principales: string
}

export interface Files {
    id: number,
    name: string,
    description: string,
    url: string,
    image: string
}

export interface ImageSlide {
    id: number,
    imagen: string,
    descripcion: string,
    titulo: string
}

export interface Regiones {
    id: number,
    titulo: string
    imagen: string,
    descripcion: string
}