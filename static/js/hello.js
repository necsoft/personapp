var persona = require('tools/persona.js');
var pdf_tools = require('tools/pdf_tools.js');

$(document).ready(function() {
    $("#get_pdf").click(function() {
        persona.pedir(23, pdf_tools.create_pdf);
    });
});

// function changeToLoad() {
//     $("#main").load('views/loading.html');
// }
// 


// function pdf_de_prueba() {
//     var doc = new jsPDF();
//     doc.addPage();
//     doc.text(20, 20, "Nombre");
//     doc.save("Test.pdf");
// }