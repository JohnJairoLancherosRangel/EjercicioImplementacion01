import { Persona } from "./persona.class.model.js";
export class Director extends Persona {
    constructor(i_areaDireccion, i_nombre, i_fotografia, i_descripcion) {
        super(i_nombre, i_fotografia, i_descripcion);
        this.areaDireccion = "";
        this.SeriesDireccion = [];
        this.areaDireccion = i_areaDireccion;
    }
    mostrarDetalleDirector() {
        console.log("El Nombre del Director Es: " + this.nombre);
        console.log("La Fotografía del Director Es: " + this.fotografia);
        console.log("La Descripcion del Director Es: " + this.descripcion);
        console.log("El Área de Dirección del Director en la Serie Es: " + this.areaDireccion);
    }
    agregarDireccion(i_serie) {
        this.SeriesDireccion.push(i_serie);
    }
    mostrarDirecciones() {
        console.log("El Director " + this.nombre + " Dirigió las siguientes Series: ");
        for (let index = 0; index < this.SeriesDireccion.length; index++) {
            const element = this.SeriesDireccion[index];
            console.log("* " + element.nombre);
        }
    }
}
