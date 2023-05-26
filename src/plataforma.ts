import { Serie } from "./serie.js";
import {Plan} from "./plan.js"

export class Plataforma{
    nombre: string;
    sitio_web: string;
    series: Serie[];
    planes: Plan[];

    constructor(nombre: string, sitio_web: string){
        this.nombre = nombre;
        this.sitio_web = sitio_web;
        this.series = [];
        this.planes = [];
    }
}