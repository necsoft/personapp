var paginas,
    paginas_procesadas = 0,
    doc = new window.jsPDF(),
    Datauri = require('datauri');

exports.create_pdf = function(personas) {
    paginas = personas.length;
    console.log("El documento tiene que tener " + paginas + " paginas.");
    create_page(personas);
    console.log(personas);
}

function create_page(personas) {
    for (var i = 0; i < paginas; i++) {
        query_image(personas[i], set_page);
    }
}

function checkFile() {
    console.log(paginas_procesadas);
    if (paginas_procesadas == paginas - 1) {
        console.log("Voy a crear el PDF");
        doc.save('Test.pdf');
    } else {

    };
}


// Se encarga de dibujar la pagina con los datos que le llegaron de la imagen
// 
function set_page(persona, image) {
    doc.addImage(image, 'JPEG', 75, 20, 50, 50);
    doc.setTextColor(100);
    doc.text(20, 20, persona.nombre);
    doc.text(20, 40, "Edad: " + persona.edad + " pirulos");
    doc.addPage();
    paginas_procesadas = paginas_procesadas + 1;
    console.log("Paginas procesadas = " + paginas_procesadas);
    checkFile();
}

// Hace el query de la imagen para saber el data url , una vez terminado llama
// a set_page
function query_image(persona, next) {
    var image = new window.Image();
    next(persona, Datauri(persona.imagen));
}