import { Categoria } from "./categoria.js";
import { Plataforma } from "./plataforma.js";
import { Episodio } from "./episodio.js";
import { Director } from "./director.js";
import { Actor } from "./actor";

export class Serie {
  imagen: string;
  nombre: string;
  categorias: Categoria;
  directores: Director[];
  actores: Actor[];
  plataforma: Plataforma;
  episodios: Episodio[];

  constructor(
    imagen: string,
    nombre: string,
    categoria: Categoria,
    directores: Director[],
    actores: Actor[],
    episodios: Episodio[],
    plataforma: Plataforma
  ) {
    this.imagen = imagen;
    this.nombre = nombre;
    this.categorias = categoria;
    this.directores = directores;
    this.actores = actores;
    this.plataforma = plataforma;
    this.episodios = episodios;
  }

  mostrar_listado_series(series: Serie[]): void {
    console.log("LIstado de todas las series: ");
    for (let elemento_del_array_serie of series) {
      console.log(elemento_del_array_serie.nombre);
    }
  }

  mostrar_detalle_serie(series: Serie): void {
    console.log("detalle de la serie: ");
    console.log("Nombre: " + series.nombre);
    console.log("Categorias: " + series.categorias);
    console.log("Directores: " + series.directores);
    console.log("Actores: " + series.actores);
    console.log("Plataforma: " + series.plataforma);
    console.log("Episodios: " + series.episodios);
  }
}
