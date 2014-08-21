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
    fs = require('fs'),
    PDFDocument = require('pdfkit'),
    doc = new PDFDocument(default_options = {
        size:"A4"
    }),
    anchoA4 = 595.28,
    centroPDF = anchoA4/2;

//
// create_pdf(personas)
//
// Recibe la cantidad de personas que va a procesar y crea una variable local.
//

exports.create_pdf = function(personas) {
    paginas = personas.length;
    create_pdf(personas,paginas);
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
// create_pdf()
//
// Crea el pdf en base a la persona que generamos anteriormente.
//


function create_pdf (personas,paginas) {
  // Creamos el archivo estatico
  doc.pipe(fs.createWriteStream('static/pdf/file.pdf'));

  // Recorro todas las personas
  for (var i = 0; i < paginas; i++) {
    // Asignamos el diseño
    set_page(personas[i]);
    // Chequeo si no es la ultima pagina
    if(i!=paginas-1){
      doc.addPage();
    }
  }

  // Finalizamos el archivo
  doc.end();

  // Lo anunciamos como ready
  isReady = true;
}

//
// set_page()
//
// Esta función recibe una persona y se encarga
// de armar el diseño visual en base a esa persona.
//

function set_page(persona){
  // Nombre
  doc.fontSize(36);
  doc.fillColor("#CCCCCC");
  doc.text(persona.name, {align:"center"});
}
