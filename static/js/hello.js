// 
// hello.js
// -------------------------------------------------------
// 
// Aca modificamos los div contenedores de las instancias,
// dependiendo de las intancias en las que estan los modulos.
// 

var persona = require('./tools/persona.js');
var pdf_tools = require('./tools/pdf_tools.js');

// 
// Chequeamos la cantidad PDF que nos pide el usuario desde el
// input que aparece en el index.
//

$("#create_pdf").click(function() {
    var cantidad_paginas = parseInt($("#cantidad").val());
    if (cantidad_paginas > 0) {
        persona.give_me(cantidad_paginas, pdf_tools.create_pdf);
    }
});

// 
// Chequeamos la cantidad PDF que nos pide el usuario desde el
// input que aparece en el index.
//

var showReady = function() {
    $('#ready').fadeIn();
};

// 
// Si tocan el botón de download_pdf se guarda el pdf.
//
$('#download_pdf').click(function() {
    pdf_tools.save_pdf();
})

if (pdf_tools.isLoading === true) {
    console.log("Cargando");
};