function verificarClave() {
    let clave = prompt("Bienvenido al apartado de Artesanias\nIngresa la contraseña: ");

    while (clave !== "ARTESANIAS") {
        clave = prompt("Contraseña incorrecta. Ingrésala nuevamente: ");
    }

    return true; // Retorna true si la contraseña es correcta
}

function procesarCompra() {
    let nombre = prompt("¿Cuál es tu nombre?");
    let edad = prompt("¿Cuál es tu edad?");
    let articulos = prompt("¿Cuántos artículos deseas comprar?");

    let respuesta = "";

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
