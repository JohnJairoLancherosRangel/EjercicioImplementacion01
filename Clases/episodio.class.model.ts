export class Episodio{

    public nombre:string = "";
    public resumen:string = "";
    public duracion:string = "";

    constructor(i_nombre:string,i_resumen:string,i_duracion:string){
        this.nombre = i_nombre;
        this.resumen = i_resumen;
        this.duracion = i_duracion;
    }
}