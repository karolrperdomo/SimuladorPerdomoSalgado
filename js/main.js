let clave = prompt("Ingresa la contraseña: ");

// repetir hasta que se ingresa ESC

while (clave != "ESC") {
    switch (clave) {
        case "ARTESANIAS":
            alert("¡Enhorabuena! Acceso permitido.");

            let numeroClientes = prompt("Por favor ingrese el número de clientes: ");
            let respuesta = "";

            for (let i = 1; i <= numeroClientes; i++) {
                let nombre = prompt("Cliente " + i + ": ¿Cuál es tu nombre?");
                let edad = prompt("Cliente " + i + ": ¿Cuál es tu edad?");
                let articulos = prompt(
                    "Cliente " + i + ": ¿Cuántos artículos deseas comprar?"
                );

                switch (true) {
                    case edad < 18 && articulos < 2:
                        respuesta +=
                            "Cliente " +
                            i +
                            ": Solo mayores de edad pueden comprar\n y Debes comprar mínimo 2 productos\n";
                        break;
                    case edad < 18 && articulos > 2:
                        respuesta +=
                            "Cliente " + i + ": Solo mayores de edad pueden comprar\n";
                        break;
                    case edad > 18 && articulos < 2:
                        respuesta +=
                            "Cliente " + i + ": Debes comprar mínimo 2 productos\n";
                        break;
                    default:
                        respuesta += "Cliente " + i + ": Gracias por tu información\n";
                }
            }

            alert(respuesta);

            break;
        default:
            alert("Contraseña incorrecta");
            break;
    }

    clave = prompt("Ingrese la contraseña");
}
