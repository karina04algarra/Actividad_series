import { Actor } from "./actor.js";
import { Categoria } from "./categoria.js";
import { Director } from "./director.js";
import { Episodio } from "./episodio.js";
import { Plataforma } from "./plataforma.js";
import { Serie } from "./serie.js";

const obj_categoria = new Categoria("entretenimiento");

const obj_episodios = new Episodio(
  "Temporada 1",
  "Resumen de la temporada",
  120
);

const obj_plataforma = new Plataforma("Netflix", "www.https:netflix.com");

// Crear instancia de Director sin listado_series por ahora
const obj_directora_karina = new Director(
  "Karina",
  "kari.jpg",
  "Eres la mejor en todo",
  []
);

// Crear instancia de Actor sin serie por ahora
const obj_actores = new Actor("Manuel", "manu.jpg", "Eres genial", []);

obj_directora_karina.listado_series.push(obj_juego_de_tronos);
// Actualizar los actores y el director con la serie correspondiente
const obj_juego_de_tronos = new Serie(
    "prueba.jpg",
    "Juego de tronos",
    obj_categoria,
    obj_directora_karina,
    obj_actores,
    obj_episodios,
    obj_plataforma
  );