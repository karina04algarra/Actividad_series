import {Persona} from "./persona.js"
import { Categoria } from "./categoria.js";
import { Plataforma} from "./plataforma.js";
import { Episodio } from "./episodio.js";

export class Serie{ 
    imagen: string;
    nombre: string;
    personas: Persona[];
    categorias: Categoria[];
    plataformas: Plataforma[];
    episodios: Episodio[];

    
    constructor(imagen: string, nombre: string){
        this.imagen = imagen;
        this.nombre = nombre;
        this.personas = [];
        this.categorias = [];
        this.plataformas = []
        this.episodios = [];
    }

}