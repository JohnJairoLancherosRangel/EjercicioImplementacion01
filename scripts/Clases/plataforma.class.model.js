export class Plataforma {
    constructor(i_nombre, i_Url) {
        this.nombre = "";
        this.Url = "";
        this.Planes = [];
        this.Series = [];
        this.nombre = i_nombre;
        this.Url = i_Url;
    }
    agregarPlan(i_plan) {
        this.Planes.push(i_plan);
    }
    agregarSerie(i_serie) {
        this.Series.push(i_serie);
    }
    mostrarPlanes() {
        console.log("Los Planes (Membresías) de la plataforma Son : ");
        for (let index = 0; index < this.Planes.length; index++) {
            const element = this.Planes[index];
            console.log("* " + element.nombre);
        }
    }
    mostrarSeries() {
        console.log("Las Series Que Emite Esta Plataforma Son: ");
        for (let index = 0; index < this.Series.length; index++) {
            const element = this.Series[index];
            console.log("* " + element.nombre);
        }
    }
    mostrarDetallePlataforma() {
        console.log("El Nombre de la Plataforma Es: " + this.nombre);
        console.log("La Url para Ingresar a la Plataforma Es: " + this.Url);
        this.mostrarPlanes();
        this.mostrarSeries();
    }
}
