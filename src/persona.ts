import {Serie} from "./serie.js"

export class Persona{
    foto: string;
    descripcion: string;
    nombre: string;
    rol: "Actor" | "Director"
    series: Serie[]


    constructor(foto: string, descripcion: string, nombre: string, rol:"Actor" | "Director"){
        this.foto = foto;
        this.descripcion = descripcion;
        this.nombre = nombre
        this.rol = rol
        this.series = []
    }

}