//
// pdf_tools.js
// -------------------------------------------------------
//
// Aca van todas las funciones que tienen que ver con generar
// los PDF de personapp.
//

var paginas,
    paginas_procesadas = 0,
    isReady = false,
    isLoading = false,
    doc = new window.jsPDF(),
    Datauri = require('datauri');

//
// create_pdf(personas)
//
// Recibe la cantidad de personas que va a procesar y crea una variable local.
//

exports.create_pdf = function(personas,loading) {
    paginas = personas.length;
    create_page(personas,loading);
};

//
// check_loading()
//
// Devuelve el estado de nuestro PDF
//

exports.check_loading = function() {
    return isLoading;
};

//
// check_ready()
//
// Devuelve el estado de nuestro PDF
//

exports.check_ready = function() {
    return isReady;
};


//
// create_page()
//
// Se encarga de armar los callbacks para hacer los queries de las imagenes
// que tienen que ser pasadas en data url, una vez hecho esto van a set_page()
// donde creamos toda la grafica de la pagina.
//

function create_page(personas,loading) {
    for (var i = 0; i < paginas; i++) {
        query_image(personas[i], set_page,loading);
    }
}

//
// check_file()
//
// Se encarga de armar los callbacks para hacer los queries de las imagenes
// que tienen que ser pasadas en data url, una vez hecho esto van a set_page()
// donde creamos toda la grafica de la pagina.
//

function check_file() {
    if (paginas_procesadas == paginas - 1) {
        isReady = true;
        console.log("Terminé el PDF");
    }else{
      console.log("Completadas "+paginas_procesadas+" paginas");
    }
}

//
// save_pdf()
//
// Esta funcion la utilizamos para poder llamar al save desde afuera
//

exports.save_pdf = function() {
    doc.save('Test.pdf');
};

//
// set_page(persona,image)
//
// Esta funcion se dispara luego del query_image, por eso le pasamos
// una imagen dentro de los parametros. Aca definimos toda la parte
// estetica del PDF utilizando las funcinalidades de jspdf
//

function set_page(persona, image,loading) {
    //Chequea si no es la primer pagina
    if (paginas_procesadas > 0) {
        doc.addPage();
    }
    // Imagen
    doc.addImage(image, 'JPEG', 140, 5, 50, 50);

    // Nombre
    doc.setTextColor(100);
    doc.setFontSize(60);
    doc.text(20, 20, persona.name);

    // Datos
    doc.setTextColor(150);
    doc.setFontSize(12);
    doc.text(20, 30, 'Age: ' + persona.age);
    doc.text(20, 35, 'Occupation: ' + persona.occupation);
    doc.text(20, 40, 'Location: ' + persona.location);
    doc.text(20, 45, 'Device: ' + persona.device);
    doc.text(20, 50, 'Browser: ' + persona.browser);
    doc.text(20, 55, 'Network: ' + persona.network);

    // Agrega la pagina y chequea si el archivo esta finalizado.
    paginas_procesadas = paginas_procesadas + 1;
    isLoading = true;
    check_file();
}

//
// query_image(persona,next)
//
// Hace el query de la imagen para convertirla en data_url
// y pasa posteriormente a set_page() donde se arma la parte
// estetica.
//

function query_image(persona, next,loading) {
    next(persona, Datauri(persona.image),loading);
}
