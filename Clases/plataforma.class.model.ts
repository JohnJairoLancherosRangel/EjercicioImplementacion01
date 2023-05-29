import { Plan } from "./plan.class.model.js";
import { Serie } from "./serie.class.model.js";

export class Plataforma{

    public nombre:string = "";
    public Url:string ="";
    public Planes:Plan[] = [];
    public Series:Serie[] = [];
    

    constructor(i_nombre:string,i_Url:string){
        this.nombre=i_nombre;
        this.Url = i_Url;
    }

    agregarPlan(i_plan:Plan){
        this.Planes.push(i_plan);
    }

    agregarSerie(i_serie:Serie){
        this.Series.push(i_serie);
    }


    mostrarPlanes(){
        console.log("Los Planes (Membresías) de la plataforma Son : " );
        for (let index = 0; index < this.Planes.length; index++) {
            const element = this.Planes[index];
            console.log("* " + element.nombre);
        }
    }

    mostrarSeries(){
        console.log("Las Series Que Emite Esta Plataforma Son: ");
        for (let index = 0; index < this.Series.length; index++) {
            const element = this.Series[index];
            console.log("* " + element.nombre);
        }
    }

    mostrarDetallePlataforma(){
        console.log("El Nombre de la Plataforma Es: " + this.nombre);
        console.log("La Url para Ingresar a la Plataforma Es: " + this.Url);
        this.mostrarPlanes();
        this.mostrarSeries();

    }
}