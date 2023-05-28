import { Serie } from "./serie.js";

export class Categoria {
  nombre: string;
  series: Serie[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.series = [];
  }

  mostrar_listado_categorias(categorias: Categoria[]): void {
    console.log("LIstado de todas las categorias: ");
    for (let elemento_del_array_categoria of categorias) {
      console.log(elemento_del_array_categoria.nombre);
    }
  }
}
