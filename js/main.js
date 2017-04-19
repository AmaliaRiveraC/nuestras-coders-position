var fotos = document.getElementsByTagName("img");
var nombre = document.getElementsByTagName("span");
var contenedor = document.getElementsByClassName("contenedor");

for (var i = 0; i < contenedor.length; i++) {
    contenedor[i].style.position = "relative";
}

for(var j = 0; j < fotos.length; j++) {
    fotos[j].style.position = "relative";
    fotos[j].style.left = "50px";
}

for(var k = 0; k < nombre.length; k++) {
    nombre[k].style.position = "absolute";
    nombre[k].style.right = "10px";
    nombre[k].style.bottom = "20px";
}



/*var edith = document.getElementById("edith");
var kary = document.getElementById("kary");
var lucero = document.getElementById("luz");
var mariana = document.getElementById("mariana");
var mimi = document.getElementById("mimi");
var silvana = document.getElementById("silvana");
var amalia = document.getElementById("amalia");*/