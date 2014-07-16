var persona = require('tools/persona.js');



$(document).ready(function() {
    $("#get_pdf").click(function() {
        console.log("Tocaste el boton");
        // pdf_de_prueba();
        persona.pedir(3);
    });
});


// function pdf_de_prueba() {
//     var doc = new jsPDF();
//     doc.addPage();
//     doc.text(20, 20, "Nombre");
//     doc.save("Test.pdf");
// }