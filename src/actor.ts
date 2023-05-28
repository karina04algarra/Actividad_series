import { Persona } from "./persona.js";
import { Serie } from "./serie.js";

export class Actor extends Persona {
  constructor(
    nombre: string,
    foto: string,
    descripcion: string,
    listado_series: Serie[]
  ) {
    super(nombre, foto, descripcion, listado_series);
  }

  mostrar_listado_directores(actores: Actor[]): void {
    console.log("LIstado de directores: ");
    for (let elemento_del_array_de_actor of actores) {
      console.log(elemento_del_array_de_actor.nombre);
    }
  }
}
