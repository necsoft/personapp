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
    doc.addImage(image, 'JPEG', 15, 40, 180, 160);
    doc.text(20, 20, "Nombre: " + persona.nombre);
    doc.text(20, 30, "Imagen: " + persona.imagen);
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
    var canvas = window.document.createElement("canvas"),
        canvasContext = canvas.getContext("2d");

    image.onload = function() {
        // Crea un canvas para poder tener en data url
        canvas.width = image.width;
        canvas.height = image.height;
        canvasContext.drawImage(image, 0, 0, image.width, image.height);
        var dataURL = canvas.toDataURL();
        // console.log(dataURL);
        // Vamos al callback
        // 
        console.log(Datauri(persona.imagen));
        next(persona, Datauri(persona.imagen));
    }
    image.src = persona.imagen;
}