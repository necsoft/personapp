var math_tools = require('./math_tools.js');

//Este es un listado de variables temporales para poder utilizar al momento de crear personas básicas.
var nombres = ["Roberto", "Raul", "Claudio", "Antonio", "Alfred", "Arturo"],
    apellidos = ["Gandulfo", "Sarlanga", "Garolfio", "Piters", "Garlondo", "Rututu", "Perez"],
    profesiones = ["Estudiante", "Carpintero", "Motoquero", "Barrabrava", "Cocinero", "Luchador de lucha libre", "Pastelero", "Transa"];

// Nos permite pedir una cantidad de personas desde afuera.
// ESTO TIENE QUE DEVOLVER UN OBJETO/JSON
exports.pedir = function(cantidad) {
    var personas = [];
    for (var i = 0; i < cantidad; i++) {
        personas.push(create());
    };
    return personas;
}
// Esta es la función interna que utilizamos para crear una instancia
// singular de una persona.
// ESTO TIENE QUE DEVOLVER UNA INSTANCIA SINGULAR DE PERSONA
function create() {
    var nombre = nombres[Math.floor(Math.random() * nombres.length)],
        apellido = apellidos[Math.floor(Math.random() * apellidos.length)],
        edad = math_tools.random_age();
    var persona = {
        "nombre": nombre,
        "apellido": apellido,
        "edad": edad,
    }
    return persona;
}