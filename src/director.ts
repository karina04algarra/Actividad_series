import { Persona } from "./persona.js";
import { Serie } from "./serie.js";

export class Director extends Persona {
  constructor(
    nombre: string,
    foto: string,
    descripcion: string,
    listado_series: Serie[]
  ) {
    super(nombre, foto, descripcion, listado_series);
  }

  mostrar_listado_directores(directores: Director[]): void {
    console.log("LIstado de directores: ");
    for (let elemento_del_array_de_directores of directores) {
      console.log(elemento_del_array_de_directores.nombre);
    }
  }

  mostrar_detalle_director(director: Director): void {
    console.log("detalle director: ");
    console.log("Nombre: " + director.nombre);
    console.log("Foto: " + director.foto);
    console.log("Descripcion: " + director.descripcion);
    console.log("listado series: " + director.listado_series);
  }
}
