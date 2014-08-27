//
// hello.js
// -------------------------------------------------------
//
// Aca modificamos los div contenedores de las instancias,
// dependiendo de las intancias en las que estan los modulos.
//

var persona = require("./tools/persona.js");
var pdf_tools = require("./tools/pdf_tools.js");

//
// Chequeamos la cantidad PDF que nos pide el usuario desde el
// input que aparece en el index.
//

$("#create_pdf").click(function() {
    var cantidad_paginas = parseInt($("#cantidad").val());
    // Valido si es mayor a 0
    if (cantidad_paginas > 0) {
        loading();
        persona.give_me(cantidad_paginas, pdf_tools.create_pdf);
    }
});

//
// Creamos el comportamiento de loading
//

function loading(){
  $("#start").fadeOut();
  $("#loading").fadeIn();
}

//
// Chequeamos la cantidad PDF que nos pide el usuario desde el
// input que aparece en el index.
//

var checkReady = function() {
  if(pdf_tools.check_ready() === true){
    $("#loading").fadeOut(function(){
      $("#ready").fadeIn(2000);
    });
  }
};

window.setInterval(checkReady,1000);

//
// Si tocan el botón de download_pdf se guarda el pdf.
//
$("#download_pdf").click(function() {
    window.location="static/pdf/file.pdf";
});
