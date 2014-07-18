var math_tools = require('./math_tools.js'),
    Chance = require('chance'),
    chance = new Chance();

// Este es un listado de variables temporales para poder utilizar al momento de crear personas básicas.
var nombres = ["Roberto", "Raul", "Claudio", "Antonio", "Alfred", "Arturo"],
    apellidos = ["Gandulfo", "Sarlanga", "Garolfio", "Piters", "Garlondo", "Rututu", "Perez"],
    profesiones = ["Estudiante", "Carpintero", "Motoquero", "Barrabrava", "Cocinero", "Luchador de lucha libre", "Pastelero", "Transa"],
    imagenes = ["static/images/001.jpg", "static/images/002.jpg", "static/images/003.jpg", "static/images/004.jpg", "static/images/005.jpg",
        "static/images/006.jpg", "static/images/007.jpg", "static/images/008.jpg", "static/images/009.jpg", "static/images/010.jpg", "static/images/011.jpg", "static/images/012.jpg"
    ];

// Nos permite pedir una cantidad de personas desde afuera.
// ESTO TIENE QUE DEVOLVER UN OBJETO/JSON
exports.pedir = function(cantidad, callback) {
    var personas = [];

    for (var i = 0; i < cantidad; i++) {
        personas.push(create());
    };

    //Le paso las personas al callback
    if (typeof callback === "function" && personas.length === cantidad) {
        callback(personas);
    }
}

// Esta es la función interna que utilizamos para crear una instancia
// singular de una persona.
// ESTO TIENE QUE DEVOLVER UNA INSTANCIA SINGULAR DE PERSONA
function create() {
    var nombre = nombres[Math.floor(Math.random() * nombres.length)],
        apellido = apellidos[Math.floor(Math.random() * apellidos.length)],
        imagen = imagenes[chance.integer({
            min: 0,
            max: imagenes.length - 1
        })],
        edad = math_tools.random_age();

    var persona = {
        "nombre": nombre,
        "apellido": apellido,
        "imagen": imagen,
        "edad": edad,
    }
    return persona;
}