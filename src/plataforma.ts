import { Serie } from "./serie.js";
import { Plan } from "./plan.js";

export class Plataforma {
  nombre: string;
  sitio_web: string;
  series: Serie[];
  planes: Plan[];

  constructor(nombre: string, sitio_web: string) {
    this.nombre = nombre;
    this.sitio_web = sitio_web;
    this.series = [];
    this.planes = [];
  }

  mostrar_listado_plataformas(plataformas: Plataforma[]): void {
    console.log("LIstado de todas las plataformas: ");
    for (let elemento_del_array_de_las_plataformas of plataformas) {
      console.log(elemento_del_array_de_las_plataformas.nombre);
    }
  }

  mostrar_detalle_plataforma(plataforma: Plataforma): void {
    console.log("detalle de la plataforma: ");
    console.log("Nombre: " + plataforma.nombre);
    console.log("Categorias: " + plataforma.sitio_web);
  }
}
