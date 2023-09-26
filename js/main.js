let clave = prompt("Ingresa la contraseña: ");

while (clave !== "ARTESANIAS") {
    clave = prompt("Contraseña incorrecta. Ingresa la contraseña: ");
}

let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuál es tu edad?");
let articulos = prompt("¿Cuántos artículos deseas comprar?");

let respuesta = "";

if (edad < 18 && articulos < 2) {
    respuesta = "Solo mayores de edad pueden comprar y Debes comprar mínimo 2 productos";
} else if (edad < 18) {
    respuesta = "Solo mayores de edad pueden comprar";
} else if (articulos < 2) {
    respuesta = "Debes comprar mínimo 2 productos";
} else {
    respuesta = "¡Felicidades! tienes un bono del 10%";
}

alert(respuesta);
