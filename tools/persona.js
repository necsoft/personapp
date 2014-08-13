//
// persona.js
// -------------------------------------------------------
//
// Este modulo se encarga de la creacion de las personas en
// tanto y en cuanto dato, es decir aca se genera toda la
// lógica generativa de personapp.
//
// Actualmente algunas cosas están funcionando de manera
// estática, pero a futuro van a tener valores y diccionarios
// reales.
//
// COSAS PARA HACER:
//
//  * Conseguir un listado de Nombres, Ciudades y Profesiones.
//  * Mejorar el algoritmo de edad para poder generar un Gaussiano creible.
//  * Guardar un valor de sexop para saber luego que imagen asignar.
//

var math_tools = require('./math_tools.js'),
    Chance = require('chance'),
    chance = new Chance();

var names = [
        "Roberto", "Raul", "Claudio", "Brenda", "Carlita", "Yamila", "Antonio", "Alfred", "Arturo"
    ],
    occupations = [
        "Estudiante", "Carpintero", "Motoquero", "Barrabrava", "Cocinero", "Luchador de lucha libre", "Pastelero", "Transa"
    ],
    locations = [
        "New York", "San Francisco", "North Carolina", "Los Angeles", "Chichuhua", "Guanajuato", "Lincoln"
    ],
    devices = [
        "Nokia 1100", "Microsoft Zune", "Iphone", "Bipper", "Sansu S8"
    ],
    browsers = [
        "Chrome", "Mozilla", "Opera", "Safari", "Dolphin"
    ],
    networks = [
        "Facebook", "Twitter", "Badoo", "Putonet", "Gaydar"
    ],
    images = [
        "static/images/001.jpg", "static/images/002.jpg", "static/images/003.jpg",
        "static/images/004.jpg", "static/images/005.jpg", "static/images/006.jpg",
        "static/images/007.jpg", "static/images/008.jpg", "static/images/009.jpg",
        "static/images/010.jpg", "static/images/011.jpg", "static/images/012.jpg"
    ];

//
// give_me()
//
// Este modulo recibe una petición de crear una cantidad de personas,
// las crea y le pasa un array de objetos al callback que nos pasen.
//

exports.give_me = function(cantidad, callback,loading) {
    loading();
    var personas = [];
    for (var i = 0; i < cantidad; i++) {
        personas.push(create());
    };
    if (typeof callback === "function" && personas.length === cantidad) {
        callback(personas,loading);
    }
}

//
// create()
//
// Crea una instancia singular de persona, en este apartado
// se arma toda la selección generativa en base a los valores
// que tengamos como "semilla".
//

function create() {
    var name = names[Math.floor(Math.random() * names.length)],
        age = math_tools.random_age(),
        occupation = occupations[Math.floor(Math.random() * occupations.length)],
        location = locations[Math.floor(Math.random() * locations.length)],
        browser = browsers[Math.floor(Math.random() * browsers.length)],
        device = devices[Math.floor(Math.random() * devices.length)],
        network = networks[Math.floor(Math.random() * networks.length)],
        image = images[chance.integer({
            min: 0,
            max: images.length - 1
        })];

    var persona = {
        "name": name,
        "age": age,
        "occupation": occupation,
        "location": location,
        "browser": browser,
        "device": device,
        "network": network,
        "image": image
    }
    return persona;
}
