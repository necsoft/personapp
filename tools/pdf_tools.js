var paginas;
var doc = new window.jsPDF();
var paginas_procesadas = 0;


exports.create_pdf = function(personas) {
    paginas = personas.length;
    create_page(personas);
}

function create_page(personas) {
    for (var i = 0; i < paginas; i++) {
        query_image(personas[i], set_page);
    }
}

function checkFile() {
    console.log(paginas_procesadas);
    console.log("Estoy chequeando");
    if (paginas_procesadas > paginas - 2) {
        doc.save('Test.pdf');
    } else {
        console.log("Todavia no voy a guardar");
        console.log(paginas_procesadas);
    };
}


// Se encarga de dibujar la pagina con los datos que le llegaron de la imagen
// 
function set_page(persona, image) {
    doc.addImage(image, 'JPEG', 15, 40, 180, 160);
    doc.text(20, 20, "Nombre: " + persona.nombre);
    doc.text(20, 40, "Edad: " + persona.edad + " pirulos");
    doc.addPage();
    paginas_procesadas = paginas_procesadas + 1;
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
        console.log(dataURL);
        // Vamos al callback
        next(persona, dataURL);
    }
    image.src = persona.imagen;
}