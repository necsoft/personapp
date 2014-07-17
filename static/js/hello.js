var persona = require('tools/persona.js');
var pdf_tools = require('tools/pdf_tools.js');

// Click en el botón de crear PDF
$("#get_pdf").click(function() {
    // Pedimos el valor del input
    var cantidad_paginas = $("#cantidad").val();
    cantidad_paginas = parseInt(cantidad_paginas);
    persona.pedir(cantidad_paginas, pdf_tools.create_pdf);
});