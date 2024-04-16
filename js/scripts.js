function contactarUsuario (){
    alert ("Nos pondremos en contacto contigo a la brevedad");
}
function error (){
    alert ("Numero equivocado, por favor seleccione 1 o 2")
}
let name = prompt ("Bienvenido a JL INMOVILIARIA! Por favor ingrese su nombre");

let phone;
let phone1;
do{
    phone = prompt ("Por favor ingrese su telefono celular para estar en contacto");
    phone1 = prompt("El numero del tel ingresado es " + phone + ". Es correcto?. si/no");
    if (phone1 !== "si") {
        alert ("vuelva a ingresar su numero telefonico");
    }
}while (phone1 !== "si");
console.log ("Su nombre es " + name );
console.log ("Su tel es " + phone);

let info1;
do {
    info1 = Number (prompt("Perfecto. ¿Que desea hacer? Ingrese un numero: 1 Alquilar una propiedad / 2 Comprar una propiedad / terreno"));
    if (info1 < 1 || info1 > 2){
        error ();
    }
 } while (info1 < 1 || info1 > 2);
    console.log ((info1 === 1? "Alquiler" : "Compra"));



    switch (info1) {
        case 2:
            let compra;
            do {
                compra = Number(prompt("¿Qué desea comprar? 1 Propiedad / 2 Terreno"));
                if (compra !== 1 && compra !== 2) {
                    error();
                } else if (compra === 1) {
                    console.log("Propiedad");
                    let room;
                    do {
                        room = Number(prompt("Ingrese cantidad de habitaciones"));
                        if (room >= 1) {
                            console.log(room + " Habitaciones");
                        } else {
                            alert ("Por favor, ingrese una cantidad válida de habitaciones.");
                        }
                    } while (room < 1);
                    
                } else if (compra === 2) {
                    console.log("Terreno");
                    
                }
            } while (compra !== 1 && compra !== 2);
        let province;
            do{
                province = Number (prompt (" Seleccione la provincia: 1 Santa Fe / 2 Cordoba"));
                if (province < 1 || province > 2) {
                    error ();
            }
        }while (province < 1 || province > 2);
        console.log ("Provincia seleccionada :" + (province === 1 ? "Santa Fe" : "Cordoba" ));
        contactarUsuario();
            break;
        

    case 1:
        let province2;
        do{
            province2 = Number (prompt (" Seleccione la provincia: 1 Santa Fe / 2 Cordoba"));
            if (province2 < 1 || province2 > 2) {
                error ();
        }
    }while (province2 < 1 || province2 > 2);
    console.log ("Provincia de " + (province2 === 1 ? "Santa Fe" : "Cordoba" ));

    let tipo
    do{
        tipo = Number (prompt ("Ingrese una opcion: 1 Departamento / 2 Casa / 3 Galpon"));
        if (tipo < 1 || tipo > 3){
           error ();
        }else if (tipo === 3){
            console.log ("Galpon");
            contactarUsuario ();
            
            break;
        }
     } while (tipo < 1 || tipo > 3);
     
    
    if (tipo !== 3) { 
        console.log((tipo === 1 ? "Departamento" : "Casa"));
    let room2;
    do {
        room2 = Number (prompt("Ingrese cantidad de habitaciones"));
        if (room2 === 1 || room2 === 2 ){
            console.log (room2 + " Habitaciones")
        }            
        else if (room2 > 2) {
            console.log (room2 + " Habitaciones")
        }   
    }while (room2 < 1);
    
    contactarUsuario ();
}
    break;

    default :
    error ();
}
