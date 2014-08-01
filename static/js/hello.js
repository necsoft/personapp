var persona = require('./tools/persona.js');
var pdf_tools = require('./tools/pdf_tools.js');

// Click en el botón de crear PDF
$("#get_pdf").click(function() {
    // Pedimos el valor del input
    var cantidad_paginas = parseInt($("#cantidad").val());
    // Chequeamos la cantidad de paginas
    if (cantidad_paginas > 0) {
        // Aca pedimos una cantidad de paginas y despues le pasamos el callback
        // por el que tiene que seguir que es crear el pdf.
        persona.pedir(cantidad_paginas, pdf_tools.create_pdf);
    }
});

var showReady = function() {
    $('#ready').fadeIn();
};





$('#download_pdf').click(function() {
    pdf_tools.saveDoc();
})

if (pdf_tools.isReady === true) {

};