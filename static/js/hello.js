var persona = require('tools/persona');

$("#get_pdf").click(function() {
    console.log("Tocaste el boton");
    pdf_de_prueba();
});

function pdf_de_prueba() {
    var doc = new jsPDF();
    doc.addPage();
    doc.text(20, 20, "Nombre");
    doc.save("Test.pdf");
}