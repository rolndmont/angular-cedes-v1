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
    descripcion: string,
    clima: string
}

export interface Graficasbarras {
    idT: number,    // Indicara que tipo grafica sera: 1 -> General, 2->Region, 3-> municipio
    idG: number,    // Indicara que posicion ocupa la grafica
    bChartLab: string[],
    data: number[],
    lab: string[],
}