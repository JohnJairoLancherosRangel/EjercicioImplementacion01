export abstract class Persona{

    public nombre:string = "";
    public fotografia:string ="";
    public descripcion:string ="";

    constructor(i_nombre:string,i_fotografia:string,i_descripcion:string){
        
        this.nombre = i_nombre;
        this.fotografia = i_fotografia;
        this.descripcion = i_descripcion;
    }
}