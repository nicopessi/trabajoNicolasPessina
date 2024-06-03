// LOGIN
class usuario {
    constructor (username, password){
        this.username = username;
        this.password = password;
    }
}

const user = new usuario ('jlinmobiliaria', 'jl');
localStorage.setItem("user", JSON.stringify(user));

// Función para iniciar sesión
function login(username, password) {
    const userRegistrado = JSON.parse(localStorage.getItem("user"));
    
    if (userRegistrado && username === userRegistrado.username && password === userRegistrado.password) {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "¡Inicio de sesión exitoso!",
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            document.getElementById("loginForm").style.display = "none"; // Oculta el formulario de inicio de sesión
            document.getElementById("dataFormContainer").style.display = "block"; // Muestra el formulario de datos
        });
    } else {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "¡Usuario o contraseña incorrectos!",
            showConfirmButton: false,
            timer: 1500
        });
    }
}

// Evento para iniciar sesión
const submitButton = document.getElementById("submitButtonn");
if (submitButton) {
    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Evitar el envío predeterminado del formulario
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        login(username, password);
    });
}

// Función constructora
class Propiedad {
    constructor (name, tipo, ubicacion, precio, ambientes, tamañoTerreno, tamañoCubierto, cochera, baños, antiguedad, dormitorios, descripcion){
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
        this.descripcion = descripcion;
    }
}

// Ejemplos de propiedades aleatorias
const propiedades = [
    new Propiedad('Casa en Venta 6', 'casa', 'Rosario', 280000, 3, 350, 180, 'si', 2, 8, 3, 'casa antigua muy bien en el sur de rosario'),
    new Propiedad('Casa en Venta 7', 'casa', 'Roldan', 320000, 4, 400, 200, 'si', 2, 5, 4, 'casa en el sur de rosario'),
    new Propiedad('Casa en Venta 8', 'casa', 'Rosario', 190000, 3, 280, 150, 'no', 1, 6, 2, 'casa en el sur de rosario'),
    new Propiedad('Casa en Venta 9', 'casa', 'Rosario', 220000, 2, 200, 120, 'no', 1, 3, 1, 'casa en el sur de rosario'),
    new Propiedad('Casa en Venta 10', 'casa', 'Roldan', 180000, 2, 250, 150, 'si', 1, 4, 1, 'casa en el sur de rosario'),
    new Propiedad('Casa en Venta 11', 'casa', 'Rosario', 290000, 4, 380, 200, 'si', 2, 9, 4, 'casa en el sur de rosario'),
    new Propiedad('Casa en Venta 12', 'casa', 'Roldan', 330000, 5, 450, 250, 'si', 2, 6, 5, 'casa en el sur de rosario'),
    new Propiedad('Casa en Venta 13', 'casa', 'Rosario', 210000, 3, 300, 170, 'no', 1, 5, 2, 'casa en el sur de rosario'),
    new Propiedad('Casa en Venta 14', 'casa', 'Rosario', 230000, 2, 220, 130, 'no', 1, 4, 1, 'casa en el sur de rosario'),
    new Propiedad('Casa en Venta 15', 'casa', 'Roldan', 200000, 2, 240, 140, 'si', 1, 3, 1, 'casa en el sur de rosario'),
    new Propiedad('Terreno en Venta 6', 'terreno', 'Roldan', 150000, 0, 600, 0, 'no', 0, 0, 0, 'casa en el sur de rosario'),
    new Propiedad('Terreno en Venta 7', 'terreno', 'Rosario', 280000, 0, 800, 0, 'si', 0, 0, 0, 'casa en el sur de rosario'),
    new Propiedad('Terreno en Venta 8', 'terreno', 'Rosario', 400000, 0, 1000, 0, 'si', 0, 0, 0, 'casa en el sur de rosario'),
    new Propiedad('Terreno en Venta 9', 'terreno', 'Roldan', 180000, 0, 500, 0, 'no', 0, 0, 0, 'casa en el sur de rosario'),
    new Propiedad('Terreno en Venta 10', 'terreno', 'Rosario', 320000, 0, 700, 0, 'si', 0, 0, 0, 'casa en el sur de rosario'),
    new Propiedad('Galpón en Venta 6', 'galpon', 'Roldan', 300000, 0, 1000, 800, 'si', 0, 15, 0, 'casa en el sur de rosario'),
    new Propiedad('Galpón en Venta 7', 'galpon', 'Rosario', 400000, 0, 1200, 1000, 'si', 0, 20, 0, 'casa en el sur de rosario'),
    new Propiedad('Galpón en Venta 8', 'galpon', 'Rosario', 450000, 0, 1500, 1200, 'si', 0, 25, 0, 'casa en el sur de rosario'),
    new Propiedad('Galpón en Venta 9', 'galpon', 'Roldan', 350000, 0, 1100, 900, 'si', 0, 18, 0, 'casa en el sur de rosario'),
    new Propiedad('Galpón en Venta 10', 'galpon', 'Rosario', 500000, 0, 1400, 1100, 'si', 0, 22, 0, 'casa en el sur de rosario'),
    
];

 


let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -32.8453, lng: -61.1494},
    zoom: 13,
  });
}

initMap();


           

        function agregarTarjetaPropiedad(propiedad) {
            const slider = document.getElementById('properties-slider');
            const propiedadDiv = document.createElement('div');
            propiedadDiv.classList.add('property-card');
            propiedadDiv.innerHTML = `
                <img src="${propiedad.imagen}" alt="${propiedad.nombre}" />
                <h3>${propiedad.nombre}</h3>
                <p>${propiedad.descripcion}</p>
            `;
            slider.appendChild(propiedadDiv);
        }

        function filtrarPropiedades(tipo, propiedades) {
            const slider = document.getElementById('properties-slider');
            slider.innerHTML = '';
            const propiedadesFiltradas = tipo === 'todo' ? propiedades : propiedades.filter(p => p.tipo === tipo);
            propiedadesFiltradas.forEach(propiedad => agregarTarjetaPropiedad(propiedad));
        }

// Función para agregar una tarjeta de propiedad al contenedor
function agregarTarjetaPropiedad(propiedad) {
    const contenedor = document.getElementById('properties-slider');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('property-details');

    const card = document.createElement('div');
    card.classList.add('card');

   
    card.dataset.tipo = propiedad.tipo;

    const baños = document.createElement('span');
    baños.classList.add('baths');

    const habitaciones = document.createElement('span');
    habitaciones.classList.add('beds');

    const cardBody = document.createElement('span');
    cardBody.classList.add('card-body');

    const titulo = document.createElement('span');
    titulo.classList.add('card-title');
    titulo.textContent = propiedad.name;

    const precio = document.createElement('p');
    precio.classList.add('prince');
    precio.textContent = `Precio: $${propiedad.precio}`;

    const descripcion = document.createElement('span');
    descripcion.classList.add('sqft');
    descripcion.textContent = propiedad.descripcion;

    const verMas = document.createElement('a');
    verMas.href = '#';
    verMas.classList.add('btn', 'btn-primary');
    verMas.textContent = 'Ver más';

    cardBody.appendChild(titulo);
    cardBody.appendChild(precio);
    cardBody.appendChild(descripcion);
    cardBody.appendChild(verMas);
    cardBody.appendChild(baños);
    cardBody.appendChild(habitaciones);

    card.appendChild(cardBody);

    cardDiv.appendChild(card);

    contenedor.appendChild(cardDiv);
}

// Obtener referencias a elementos HTML relevantes
const selectorPropiedad = document.getElementById('selector-propiedad');

// Evento de cambio para el selector de propiedad
selectorPropiedad.addEventListener('change', function() {
    const tipoPropiedadSeleccionado = selectorPropiedad.value;

    // Borra todas las tarjetas de propiedades antes de agregar nuevas
    const contenedor = document.getElementById('properties-slider');
    contenedor.innerHTML = ''; 

    if (tipoPropiedadSeleccionado === "todo") {
        
        propiedades.forEach(propiedad => {
            agregarTarjetaPropiedad(propiedad);
        });
    } else {
        const propiedadesFiltradas = propiedades.filter(propiedad => propiedad.tipo === tipoPropiedadSeleccionado);
        propiedadesFiltradas.forEach(propiedad => {
            agregarTarjetaPropiedad(propiedad);
        });
    }
});

//Guardar datos cargados
const guardarDatosButton = document.getElementById("guardarDatos");

if (guardarDatosButton) {
    guardarDatosButton.addEventListener("click", function (event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const tipo = document.getElementById("tipo").value;
        const ubicacion = document.getElementById("ubicacion").value;
        const precio = document.getElementById("precio").value;
        const ambientes = document.getElementById("ambientes").value;
        const tamañoTerreno = document.getElementById("tamañoterreno").value;
        const tamañoCubierto = document.getElementById("tamañocubierto").value;
        const cochera = document.getElementById("cochera").value;
        const baños = document.getElementById("baños").value;
        const antiguedad = document.getElementById("antiguedad").value;
        const dormitorios = document.getElementById("dormitorios").value;
        const descripcion = document.getElementById("descripcion").value;
    
        const nuevaPropiedad = new Propiedad (nombre, tipo, ubicacion, precio, ambientes, tamañoTerreno, tamañoCubierto, cochera, baños, antiguedad, dormitorios, descripcion);
        propiedades.push(nuevaPropiedad);
       
        if (!nombre || !tipo || !ubicacion || !precio || !ambientes || !tamañoTerreno || !tamañoCubierto || !cochera || !baños || !antiguedad || !dormitorios || !descripcion) {
            Swal.fire({
                title: "Error",
                text: "Por favor, complete todos los campos obligatorios.",
                icon: "error"
            });
            return; 
        }
        document.getElementById("dataForm").reset();
        Swal.fire({
            title: "Excelente!",
            text: "Propiedad agregada!",
            icon: "success"
          });
        
    });
}



 $(function () {
            let headerElem = $('header');
            let logo = $('#logo');
            let navMenu = $('#nav-menu');
            let navToggle = $('#nav-toggle');

           $('#properties-slider').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                prevArrow: '<a href="#" class="slick-arrow slick-prev">previous</a>',
                nextArrow: '<a href="#" class="slick-arrow slick-next">next</a>',
                responsive: [
                    {
                        breakpoint: 1100,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: true,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                        }
                    },
                    {
                        breakpoint: 530,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                        }
                    }
                ]
           });

           $('#testimonials-slider').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '<a href="#" class="slick-arrow slick-prev"><</a>',
                nextArrow: '<a href="#" class="slick-arrow slick-next">></a>'
           });

           navToggle.on('click', () => {
               navMenu.css('right', '0');
           });

           $('#close-flyout').on('click', () => {
                navMenu.css('right', '-100%');
           });

           $(document).on('click', (e) => {
               let target = $(e.target);
               if (!(target.closest('#nav-toggle').length > 0 || target.closest('#nav-menu').length > 0)) {
                   navMenu.css('right', '-100%');
               }
           });

           $(document).scroll(() => {
               let scrollTop = $(document).scrollTop();

               if (scrollTop > 0) {
                   navMenu.addClass('is-sticky');
                   logo.css('color', '#000');
                   headerElem.css('background', '#fff');
                   navToggle.css('border-color', '#000');
                   navToggle.find('.strip').css('background-color', '#000');
               } else {
                   navMenu.removeClass('is-sticky');
                   logo.css('color', '#fff');
                   headerElem.css('background', 'transparent');
                   navToggle.css('bordre-color', '#fff');
                   navToggle.find('.strip').css('background-color', '#fff');
               }

               headerElem.css(scrollTop >= 200 ? {'padding': '0.5rem', 'box-shadow': '0 -4px 10px 1px #999'} : {'padding': '1rem 0', 'box-shadow': 'none' });
           });

           $(document).trigger('scroll');
        });

        