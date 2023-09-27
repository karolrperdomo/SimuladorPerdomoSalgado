// Esta funcion verifica el acceso mediante la clave "ARTESANIAS"

function verificarClave() {
    let clave = prompt("Bienvenido al apartado de Artesanias\nIngresa la contraseña: ");

    //CICLO While, se debe cumplir que ingrese la contraseña correcta

    while (clave !== "ARTESANIAS") {
        clave = prompt("Contraseña incorrecta. Ingrésala nuevamente: ");
    }

    return true; // Me retorna si es true
}

function procesarCompra() {
    let nombre = prompt("¿Cuál es tu nombre?");
    let edad = prompt("¿Cuál es tu edad?");
    let articulos = prompt("¿Cuántos artículos deseas comprar?");

    let respuesta = "";

    //CONDICIONAL If, la cual me valida edad y cantidad de articulos

    if (edad < 18 && articulos < 2) {
        respuesta = "Solo mayores de edad pueden comprar y debes comprar mínimo 2 productos";
    } else if (edad < 18) {
        respuesta = "Solo mayores de edad pueden comprar";
    } else if (articulos < 2) {
        respuesta = "Debes comprar mínimo 2 productos";
    } else {
        respuesta = "¡Felicidades! tienes un bono del 10%";
    }

    alert(respuesta);
}

console.log("Gracias por visitar nuestra página")

// Llama a las funciones
if (verificarClave()) {
    procesarCompra();
}
