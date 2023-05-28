import { Serie } from "./serie.js";

export class Episodio {
  nombre: string;
  resumen: string;
  duracion: number;
  series: Serie[];

  constructor(nombre: string, resumen: string, duracion: number) {
    this.nombre = nombre;
    this.resumen = resumen;
    this.duracion = duracion;
    this.series = [];
  }
}
