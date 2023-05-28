export class Categoria {
    constructor(nombre) {
        this.nombre = nombre;
        this.series = [];
    }
    mostrar_listado_categorias(categorias) {
        console.log("LIstado de todas las categorias: ");
        for (let elemento_del_array_categoria of categorias) {
            console.log(elemento_del_array_categoria.nombre);
        }
    }
}
