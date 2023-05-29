export class Serie {
    constructor(i_nombre, i_imagen, i_categoria, i_director, i_actor) {
        this.nombre = "";
        this.imagen = "";
        this.Categorias = [];
        this.Directores = [];
        this.Actores = [];
        this.Episodios = [];
        this.Plataformas = [];
        this.nombre = i_nombre;
        this.imagen = i_imagen;
        this.Categorias.push(i_categoria);
        this.Directores.push(i_director);
        this.Actores.push(i_actor);
    }
    agregarCategoria(i_categoria) {
        this.Categorias.push(i_categoria);
    }
    agregarActor(i_actor) {
        this.Actores.push(i_actor);
    }
    agregarDirector(i_director) {
        this.Directores.push(i_director);
    }
    agregarEpisodio(i_Episodio) {
        this.Episodios.push(i_Episodio);
    }
    agregarPlataforma(i_Plataforma) {
        this.Plataformas.push(i_Plataforma);
    }
    mostrarDetalleSerie() {
        console.log("Nombre Serie: " + this.nombre);
        console.log("Imagen de la Serie: " + this.imagen);
        this.mostrarCategorias();
        this.mostrarDirectores();
        this.mostrarActores();
    }
    mostrarCategorias() {
        console.log("Categorias de la Serie: ");
        for (let index = 0; index < this.Categorias.length; index++) {
            const element = this.Categorias[index];
            console.log("* " + element.nombre);
        }
    }
    mostrarActores() {
        console.log("Actores de la Serie: ");
        for (let index = 0; index < this.Actores.length; index++) {
            const element = this.Actores[index];
            console.log("* " + element.nombre);
        }
    }
    mostrarDirectores() {
        console.log("Directores de la Serie: ");
        for (let index = 0; index < this.Directores.length; index++) {
            const element = this.Directores[index];
            console.log("* " + element.nombre);
        }
    }
    mostrarPlataformas() {
        console.log("Plataformas de Emisión: ");
        for (let index = 0; index < this.Plataformas.length; index++) {
            const element = this.Plataformas[index];
            console.log("* " + element.nombre);
        }
    }
    mostrarEpisodios() {
        console.log("Episodios de la Serie: ");
        for (let index = 0; index < this.Episodios.length; index++) {
            const element = this.Episodios[index];
            console.log("* " + element.nombre);
        }
    }
}
