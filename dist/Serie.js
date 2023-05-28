export class Serie {
    constructor(imagen, nombre, categoria, directores, actores, episodios, plataforma) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.categorias = categoria;
        this.directores = directores;
        this.actores = actores;
        this.plataforma = plataforma;
        this.episodios = episodios;
    }
    mostrar_listado_series(series) {
        console.log("LIstado de todas las series: ");
        for (let elemento_del_array_serie of series) {
            console.log(elemento_del_array_serie.nombre);
        }
    }
    mostrar_detalle_serie(series) {
        console.log("detalle de la serie: ");
        console.log("Nombre: " + series.nombre);
        console.log("Categorias: " + series.categorias);
        console.log("Directores: " + series.directores);
        console.log("Actores: " + series.actores);
        console.log("Plataforma: " + series.plataforma);
        console.log("Episodios: " + series.episodios);
    }
}
