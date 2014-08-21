//
// app.js
// -------------------------------------------------------
//
// Se encarga de hacer require de la gui de node-webkit.
//

//Importamos el paquete que usamos para la gui
var nw = window.require('nw.gui');
//Creamos una variable para llamar a la ventana
var win = nw.Window.get();
//Comentar para no abrir la dev-tool
win.showDevTools();

//Aseguramos que este cargado todo el document
$(document).ready(function(){

  //Creamos el boton de minimizar
  document.getElementById("minimize").onclick = function(){
    win.minimize();
  };

  //Creamos el boton de close
  document.getElementById("close").onclick = function(){
    win.close();
  };
});
