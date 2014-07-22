var math_tools = require('./math_tools.js'),
    Chance = require('chance'),
    chance = new Chance();

// Este es un listado de variables temporales para poder utilizar al momento de crear personas básicas.
var names = ["Roberto", "Raul", "Claudio", "Brenda", "Carlita", "Yamila", "Antonio", "Alfred", "Arturo"],
    occupations = ["Estudiante", "Carpintero", "Motoquero", "Barrabrava", "Cocinero", "Luchador de lucha libre", "Pastelero", "Transa"],
    locations = ["New York", "San Francisco", "North Carolina", "Los Angeles", "Chichuhua", "Guanajuato", "Lincoln"],
    devices = ["Nokia 1100", "Microsoft Zune", "Iphone", "Bipper", "Sansu S8"],
    browsers = ["Chrome", "Mozilla", "Opera", "Safari", "Dolphin"],
    networks = ["Facebook", "Twitter", "Badoo", "Putonet", "Gaydar"],
    images = ["static/images/001.jpg", "static/images/002.jpg", "static/images/003.jpg", "static/images/004.jpg", "static/images/005.jpg",
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