import { Persona } from "./persona.js";
export class Actor extends Persona {
    constructor(nombre, foto, descripcion, listado_series) {
        super(nombre, foto, descripcion, listado_series);
    }
    mostrar_listado_directores(actores) {
        console.log("LIstado de directores: ");
        for (let elemento_del_array_de_actor of actores) {
            console.log(elemento_del_array_de_actor.nombre);
        }
    }
}
