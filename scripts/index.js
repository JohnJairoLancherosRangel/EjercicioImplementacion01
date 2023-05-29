import { Actor } from "./Clases/actor.class.model.js";
import { Categoria } from "./Clases/categoria.class.model.js";
import { Director } from "./Clases/director.class.model.js";
import { Episodio } from "./Clases/episodio.class.model.js";
import { Plan } from "./Clases/plan.class.model.js";
import { Plataforma } from "./Clases/plataforma.class.model.js";
import { Serie } from "./Clases/serie.class.model.js";
////// Creando una nueva Categoria ////
const CategoriaHistoria = new Categoria("Historia");
////// Creando un nuevo Director ////
const DirectorPH = new Director("Programa TV", "Leftfield Pictures", "https://s3.amazonaws.com/images.productionhub.com/profiles/logos/179712_k1mju2mdaw.jpg", "Leftfield Pictures es una potencia de contenido sin guión con cientos de horas de programación premium innovadora y de vanguardia," +
    "que se transmite en varias redes importantes, OTT y plataformas teatrales.");
////// Creando un nuevo Actor ////
const Actor1PH = new Actor("Protagonista", "Rick Harrison", "https://es.wikipedia.org/wiki/Rick_Harrison#/media/Archivo:Rick_Harrison_by_Gage_Skidmore.jpg", "Es un empresario estadounidense, conocido por ser el propietario de la tienda de empeño Gold & Silver Pawn Shop en Las Vegas.");
////// Creando una nueva serie (Relacion de Composicion con Categoria,Director,Actor)////
const SeriePH = new Serie("El Precio de la Historia", "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/9b2a228ecacc77e6337b41e9edf4cd862a18cd46d9622837d269698f15a8118b._RI_TTW_.jpg", CategoriaHistoria, DirectorPH, Actor1PH);
////// Agregando una nueva categoria a la serie ////////////////
const CategoriaEntretenimiento = new Categoria("Entretenimeinto");
SeriePH.agregarCategoria(CategoriaEntretenimiento);
////// Agregando Actores a la Serie /////////////////////////////
const Actor2PH = new Actor("Protagonista", "Corey Harrison", "https://es.wikipedia.org/wiki/Corey_Harrison#/media/Archivo:Corey_from_Pawn_Stars_(cropped).jpg", "Es un hombre de negocios y celebridad estadounidense, conocido por salir en la serie de televisión de History, El precio de la historia, que documenta su trabajo en la famosa casa de empeños, Gold & Silver Pawn Shop");
const Actor3PH = new Actor("Protagonista", "Austin Russell", "https://es.wikipedia.org/wiki/Chumlee#/media/Archivo:Chumleewithcrop.jpg", "Es conocido por aparecer en el programa de televisión Pawn Stars, de History Channel, donde trabaja en la casa de empeños Gold and Silver en Las Vegas, con Rick Harrison.");
SeriePH.agregarActor(Actor2PH);
SeriePH.agregarActor(Actor3PH);
//// Agregando Director a la Serie /////////////////////////////
const Director2PH = new Director("Planificación", "The History Channel", "https://es.wikipedia.org/wiki/History#/media/Archivo:History_(2021).svg", "Es un canal de televisión por suscripción propiedad de A&E Networks.");
SeriePH.agregarDirector(Director2PH);
/// Creando Plataforma, Agregando Serie y mostrando las series que se emiten //////
const NetflixPlataforma = new Plataforma("Netflix", "https://www.netflix.com/co/");
NetflixPlataforma.agregarSerie(SeriePH);
NetflixPlataforma.mostrarSeries;
/// Creando Plan Para Agregarlo a la Plataforma //////
const PlanMensual = new Plan("Mensual", "16.900");
NetflixPlataforma.agregarPlan(PlanMensual);
//////  Mostrando los detalles de la serie ///////////
console.log("---------------------------------------------------------------------------");
SeriePH.mostrarDetalleSerie();
//// Mostrando Categorias Serie //////////////
console.log("---------------------------------------------------------------------------");
SeriePH.mostrarCategorias();
///// Mostrando Directores Serie ///////////////
console.log("---------------------------------------------------------------------------");
SeriePH.mostrarDirectores();
//// Mostrando Actores Seriee /////////////
console.log("---------------------------------------------------------------------------");
SeriePH.mostrarActores();
/// Mostrando la información (detalle) de un actor de la serie //////
console.log("---------------------------------------------------------------------------");
SeriePH.Actores[0].mostrarDetalleActor();
console.log("----------------------------");
SeriePH.Actores[1].mostrarDetalleActor();
console.log("----------------------------");
SeriePH.Actores[2].mostrarDetalleActor();
/// Mostrando la información (detalle) de un director de la serie //////
console.log("---------------------------------------------------------------------------");
SeriePH.Directores[0].mostrarDetalleDirector();
///// Agregando Plataforma a plataformas donde se emite la serie ////
console.log("---------------------------------------------------------------------------");
SeriePH.agregarPlataforma(NetflixPlataforma);
///// mostrando plataformas que emiten la serie //////
console.log("---------------------------------------------------------------------------");
SeriePH.mostrarPlataformas();
////// Mostrando los detalles de la plataforma ////
console.log("---------------------------------------------------------------------------");
NetflixPlataforma.mostrarDetallePlataforma();
//// Creando Episodio y agregandolo a la serie ////////////////////////
console.log("---------------------------------------------------------------------------");
const Episodio1 = new Episodio("Inauguración", "Primer Capitulo de la Serie", "35 Minutos");
SeriePH.agregarEpisodio(Episodio1);
SeriePH.mostrarEpisodios();
//// Añadiendo y mostrando las series en las que han trbajado actores y directores
console.log("---------------------------------------------------------------------------");
Actor1PH.agregarActuacion(SeriePH);
Actor1PH.mostrarActuaciones();
console.log("-------------------------------");
DirectorPH.agregarDireccion(SeriePH);
DirectorPH.mostrarDirecciones();
