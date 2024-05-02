// Función constructora
class Propiedad {
    constructor (name, tipo, ubicacion, precio, ambientes, tamañoTerreno, tamañoCubierto, cochera, baños, antiguedad, dormitorios){
    this.name = name;
    this.tipo = tipo;
    this.ubicacion = ubicacion;
    this.precio = precio;
    this.ambientes = ambientes;
    this.tamañoTerreno = tamañoTerreno;
    this.tamañoCubierto = tamañoCubierto;
    this.cochera = cochera;
    this.baños = baños;
    this.antiguedad = antiguedad;
    this.dormitorios = dormitorios;
}
}
let propiedades = [];

//Funcion para agregar propiedad
function agregarPropiedad (){
    let name = prompt("Ingrese el nombre de propiedad")
    let tipo = Number(prompt("Ingrese el tipo de propiedad: 1 Propiedad / 2 Terreno / 3 Galpon"))
    let ubicacion = prompt ("Ingrese la ubicacion de la propiedad (ciudad)")
    let precio = Number (prompt ("Ingrese el precio de la propiedad en peso argentino"))
    let ambientes = Number(prompt("Ingrese cantidad de ambientes"))
    let tamañoTerreno = Number(prompt("Ingrese metros cuadrados del terreno"))
    let tamañoCubierto = Number(prompt("Ingrese metros cubiertos dentro del terreno"))
    let cochera = prompt("Ingrese si tiene cochera (si o no)")
    let baños = Number(prompt("Ingrese cantidad de baños en la propiedad"))
    let antiguedad = Number(prompt("Ingrese cantidad de años de la propiedad"))
    let dormitorios = Number(prompt("Ingrese cantidad de dormitorios que tiene la propiedad"))

    let nuevaPropiedad = new Propiedad(name, tipo, ubicacion, precio, ambientes, tamañoTerreno, tamañoCubierto, cochera, baños, antiguedad, dormitorios);
    propiedades.push(nuevaPropiedad);

    alert ("La propiedad ha sido agregada con exito!")
}

//Funcion para filtrar propiedades
function filtrarPropiedades(tipoPropiedad = null) {
    console.log("Filtrando propiedades...");

    if (propiedades.length === 0) {
        console.log("No hay propiedades para filtrar.");
        return;
    }

    let filtroUbicacion = prompt("Ingrese la ciudad donde desea comprar (deje en blanco si no es relevante)").toLowerCase();
    let filtroAmbientes = prompt("Ingrese la cantidad de ambientes deseados (deje en blanco si no es relevante)");
    let filtroDormitorios = prompt("Ingrese la cantidad de dormitorios deseados (deje en blanco si no es relevante)");
    let filtroBaños = prompt("Ingrese la cantidad de baños deseados (deje en blanco si no es relevante)");
    let filtroCochera = prompt("Desea con cochera: si / no (deje en blanco si no es relevante)").toLowerCase();

    propiedades.forEach(propiedad => {
        if ((filtroUbicacion === "" || propiedad.ubicacion.toLowerCase() === filtroUbicacion) &&
            (filtroAmbientes === "" || propiedad.ambientes == filtroAmbientes || isNaN(filtroAmbientes)) &&
            (filtroDormitorios === "" || propiedad.dormitorios == filtroDormitorios || isNaN(filtroDormitorios)) &&
            (filtroBaños === "" || propiedad.baños == filtroBaños || isNaN(filtroBaños)) &&
            (filtroCochera === "" || propiedad.cochera.toLowerCase() === filtroCochera) &&
            (tipoPropiedad === null || propiedad.tipo === tipoPropiedad)) {
            console.log(`Listado de propiedades filtradas: Nombre: ${propiedad.name}, Ambientes: ${propiedad.ambientes}, Ubicacion: ${propiedad.ubicacion}, Dormitorios: ${propiedad.dormitorios}, Baños: ${propiedad.baños}, Cochera: ${propiedad.cochera}, Tipo de Propiedad: ${propiedad.tipo}`);
        }
    });
}

// Función para mostrar terrenos 
function mostrarTerrenos() {
    console.log("Mostrando terrenos...");

    if (propiedades.length === 0) {
        console.log("No hay propiedades para mostrar.");
        return;
    }

    propiedades.forEach(propiedad => {
        if (propiedad.tipo === 2) {
            console.log(`Nombre: ${propiedad.name}, Tamaño Terreno: ${propiedad.tamañoTerreno}m², Ubicación: ${propiedad.ubicacion}, Precio: $${propiedad.precio}`);
        }
    });
}

// Función para mostrar galpones 
function mostrarGalpones() {
    console.log("Mostrando galpones...");

    if (propiedades.length === 0) {
        console.log("No hay propiedades para mostrar.");
        return;
    }

    propiedades.forEach(propiedad => {
        if (propiedad.tipo === 3) { 
            console.log(`Nombre: ${propiedad.name}, Ubicacion: ${propiedad.ubicacion}, Tamaño Terreno: ${propiedad.tamañoTerreno}m², Tamaño Cubierto: ${propiedad.tamañoCubierto}m², Antiguedad: ${propiedad.antiguedad}, Precio: $ ${propiedad.precio}.`);
        }
    });
}



// Función para mostrar todas las propiedades
function mostrarPropiedades() {
    document.write("Listado de propiedades");
    propiedades.forEach((propiedad, index) => {
        document.write("Propiedad " + (index + 1) + " Nombre: " + propiedad.name + " Tipo: " + propiedad.tipo + ", Ubicación: " + propiedad.ubicacion + ", Precio: " + propiedad.precio + ", Ambientes: " + propiedad.ambientes + ", Tamaño del terreno: " + propiedad.tamañoTerreno + ", Tamaño cubierto: " + propiedad.tamañoCubierto + ", Cochera: " + propiedad.cochera + ", Baños: " + propiedad.baños + ", Antigüedad: " + propiedad.antiguedad + ", Dormitorios: " + propiedad.dormitorios);
    });
    return;
}




//Funcion para contactar usuario
function contactarUsuario (){
    alert ("Nos pondremos en contacto contigo a la brevedad");
}
//Funcion para mostrar error mensaje
function error (){
    alert ("Numero equivocado, por favor seleccione 1, 2 o 3")
}
const propiedad1 = 
    new Propiedad('Propiedad 1', 1, 'Rosario', 250000, 4, 400, 200, 'si', 2, 10, 3);
const propiedad2 = 
    new Propiedad('Propiedad 2', 1, 'Rosario', 180000, 3, 300, 150, 'no', 1, 5, 2);
const propiedad3 = 
    new Propiedad('Propiedad 3', 1, 'Roldan', 25000, 0, 500, 0, 'no', 0, 0, 0);
const propiedad4 = 
    new Propiedad('Propiedad 4', 3, 'Roldan', 50000, 0, 800, 600, 'no', 0, 10, 0);
const propiedad5 = 
    new Propiedad('Propiedad 5', 3, 'Rosario', 60000, 0, 900, 500, 'no', 0, 10, 0);
const propiedad6 = 
    new Propiedad('Propiedad 6', 2, 'Roldan', 20000, 0, 400, 0, 'no', 0, 0, 0);
const propiedad7 = 
    new Propiedad('Propiedad 7', 3, 'Rosario', 350000, 4, 400, 200, 'si', 3, 2, 4);
propiedades.push(propiedad1);
propiedades.push(propiedad2);
propiedades.push(propiedad3);
propiedades.push(propiedad4);
propiedades.push(propiedad5);
propiedades.push(propiedad6);
propiedades.push(propiedad7);



// Solicitar nombre o usuario JLinmobiliaria
let usuario = prompt("Bienvenido a JL INMOBILIARIA! Por favor ingrese su nombre");

if (usuario !== "JLinmobiliaria") {
    let phone;
    let phone1;
    do {
        phone = prompt("Por favor ingrese su telefono celular para estar en contacto");
        phone1 = prompt("El numero del tel ingresado es " + phone + ". Es correcto?. si/no");
        if (phone1 !== "si") {
            alert("Vuelva a ingresar su numero telefonico");
        }
    } while (phone1 !== "si");
    console.log("Su nombre es " + usuario);
    console.log("Su tel es " + phone);
   
     let   info1 = Number(prompt("Perfecto. ¿Qué desea hacer? Ingrese un numero: 1 Ver todas las propiedades disponibles / 2 Filtrar propiedades"));
        if (info1 < 1 || info1 > 2) {
            error();
        }
        if (info1 === 1) {
            mostrarPropiedades();
            
        }
        if (info1 === 2) {
            let compra;
            do {
                compra = Number(prompt("¿Qué desea comprar? 1 Propiedad / 2 Terreno / 3 Galpon"));
                if (compra < 1 || compra > 3) {
                    error();
                }
                if (compra === 1) {
                    filtrarPropiedades (1);
                    
                } else if (compra === 2) {
                    mostrarTerrenos();
                    
                } else if (compra === 3) {
                    mostrarGalpones();
                    
                }
            } while (compra !== 1 && compra !== 2 && compra !== 3);
        }
    
} else {
    let clave;
    do {
        clave = Number(prompt("Bienvenido! Ingrese la clave"));
        if (clave !== 147258) {
            alert("Clave incorrecta, vuelva a ingresarla");
        }
    } while (clave !== 147258);

    let tarea;
    do {
        tarea = Number(prompt("Que desea hacer? 1 Cargar una propiedad / 2 Mostrar todas las propiedades / 3 Salir/ 4 Filtrar propiedades"));
        if (tarea === 3) {
            alert("Hasta luego, nos vemos pronto");
            break;
        } else if (tarea === 1) {
            agregarPropiedad();
        } else if (tarea === 4 ){
            filtrarPropiedades ();
            
        } else if (tarea === 2) {
            mostrarPropiedades();
            
        }
    } while (tarea !== 3);
}



