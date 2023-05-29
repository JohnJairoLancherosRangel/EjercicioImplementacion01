import { Persona } from "./persona.class.model.js";
import { Serie } from "./serie.class.model.js";

export class Actor extends Persona{

    public Papel:string = "";
    public SeriesActuacion:Serie[]=[];

    constructor(i_papel:string,i_nombre:string,i_fotografia:string,i_descripcion:string){
        super(i_nombre,i_fotografia,i_descripcion);
        this.Papel = i_papel;
    }

    mostrarDetalleActor(){
        console.log("El Nombre del Actor Es: " + this.nombre);
        console.log("La Fotografía del Actor Es: " + this.fotografia);
        console.log("La Descripcion del Actor Es: " + this.descripcion);
        console.log("El Papel del Actor en la Serie Es: " + this.Papel);
    }

    agregarActuacion(i_serie:Serie){
        this.SeriesActuacion.push(i_serie);
    }

    mostrarActuaciones(){

        console.log("El Actor " + this.nombre + " Actuó en las siguientes Series: " );
        for (let index = 0; index < this.SeriesActuacion.length; index++) {
            const element = this.SeriesActuacion[index];
            console.log("* " + element.nombre);
        }
        
    }
}