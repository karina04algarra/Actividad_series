import { Serie } from "./serie.js";

export class Persona {
  nombre: string;
  foto: string;
  descripcion: string;
  listado_series: Serie[];

  constructor(
    nombre: string,
    foto: string,
    descripcion: string,
    listado_series: Serie[]
  ) {
    this.nombre = nombre;
    this.foto = foto;
    this.descripcion = descripcion;
    this.listado_series = listado_series;
  }
}
