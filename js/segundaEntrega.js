//Para la segunda entrega se realizan realizar operaciones 
//como suma y promedio en base a los valores de precios de las artesanías.
//Se implementa el uso de objetos, listas, metodos de busqueda  y filtrado

//Funcion Artesania, recibe como parametros nombre y precio
function Artesania(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

// La lista va a tener valores de String y numero, es una lista  mixta
let artesanias = [
    new Artesania("Pulsera", 10),
    new Artesania("Collar", 20),
    new Artesania("Anillo", 15),
    new Artesania("Bufanda", 25)
];

//busca una artesania en la lista "artesanias"
function buscarPorNombre(nombre) {
    return artesanias.find(function (artesania) {
        return artesania.nombre === nombre;
    });
}

//Parametro precioMaximo, en esta funcion solo se incluyan aquellas cuyo precio sea igual 
//o menor al valor pasado como precioMaximo
function filtrarPorPrecioMaximo(precioMaximo) {
    return artesanias.filter(function (artesania) {
        return artesania.precio <= precioMaximo;
    });
}

function sumaPrecios() {
    let suma = 0;
    for (let i = 0; i < artesanias.length; i++) {
        suma += artesanias[i].precio;
    }
    return suma;
}

function promedioPrecios() {
    let suma = sumaPrecios();
    return suma / artesanias.length;
}

let entrada = prompt("Ingresa el nombre de una artesanía para buscar:");
let artesaniaEncontrada = buscarPorNombre(entrada);

if (artesaniaEncontrada) {
    alert("Artículo encontrado: " + artesaniaEncontrada.nombre + " - Precio: $" + artesaniaEncontrada.precio);
} else {
    alert("Artículo no encontrado.");
}

// parseFloat para convertirla en un número de punto flotante (float) 
let precioMaximo = parseFloat(prompt("Ingresa un precio máximo para filtrar artesanías:"));
let artesaniasFiltradas = filtrarPorPrecioMaximo(precioMaximo);

if (artesaniasFiltradas.length > 0) {
    let mensaje = "Artículos con precio igual o menor a $" + precioMaximo + ":\n";
    for (let i = 0; i < artesaniasFiltradas.length; i++) {
        let artesania = artesaniasFiltradas[i];
        mensaje += artesania.nombre + " - Precio: $" + artesania.precio + "\n";
    }
    alert(mensaje);
} else {
    alert("No se encontraron artículos por debajo del precio máximo ingresado.");
}

let suma = sumaPrecios();
let promedio = promedioPrecios();

alert("La suma de todas las artesanias es de: $" + suma);
alert("El promedio de precios de todas las artesanías es de: $" + promedio);
