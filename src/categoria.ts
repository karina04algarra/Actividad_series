import {Serie} from "./serie.js"

export class Categoria{
    nombre: string;
    series: Serie[]

    constructor(nombre: string){
        this.nombre = nombre;
        this.series = []
    }
}