var paginas;
var doc = new window.jsPDF();

exports.create_pdf = function(personas) {

    // var hola = $("#main");
    paginas = personas.length;
    console.log("Voy a hacer un PDF de: " + personas[0].nombre);
    console.log("El PDF va a tener " + paginas + " paginas.");


    for (var i = 0; i < paginas; i++) {
        create_page(personas[i]);
        if (i === paginas - 1) {
            doc.save('Test.pdf');
        };
    };
}

function create_page(persona) {

    doc.text(20, 20, "Nombre: " + persona.nombre);
    doc.text(20, 30, "Apellido: " + persona.apellido);
    doc.text(20, 40, "Edad: " + persona.edad + " pirulos");
    doc.addPage();
}