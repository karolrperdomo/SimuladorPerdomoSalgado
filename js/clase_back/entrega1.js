class TiendaDeArtesanias {
    /**
     * Constructor de la clase TiendaDeArtesanias.
     * Inicializa la lista de artesanías y el contador de ID.
     */
    constructor() {
        this.artesanias = [];
        this.artesaniaIdCounter = 1;
    }

    /**
     * Método para agregar una nueva artesanía.
     * @param {Object} artesaniaData - Datos de la artesanía a agregar.
     * @param {string} artesaniaData.nombre - Nombre de la artesanía.
     * @param {string} artesaniaData.descripcion - Descripción de la artesanía.
     * @param {number} artesaniaData.precio - Precio de la artesanía en pesos colombianos.
     * @param {string} artesaniaData.imagen - Ruta de la imagen de la artesanía.
     * @param {string} artesaniaData.codigo - Código identificador de la artesanía.
     * @param {number} artesaniaData.stock - Número de piezas disponibles.
     */
    agregarArtesania(artesaniaData) {
        const { nombre, descripcion, precio, imagen, codigo, stock } = artesaniaData;

        // Validar campos obligatorios
        if (!nombre || !descripcion || !precio || !imagen || !codigo || !stock) {
            console.error('Todos los campos son obligatorios');
            return;
        }

        // Validar código único
        if (this.artesanias.some(artesania => artesania.codigo === codigo)) {
            console.error('Ya existe una artesanía con ese código');
            return;
        }

        // Agregar artesanía con id autoincrementable
        const nuevaArtesania = {
            id: this.artesaniaIdCounter++,
            nombre,
            descripcion,
            precio,
            imagen,
            codigo,
            stock,
        };

        this.artesanias.push(nuevaArtesania);
        console.log('Artesanía agregada:', nuevaArtesania);
    }

    /**
     * Método para obtener todas las artesanías.
     * @returns {Array} - Lista de todas las artesanías.
     */
    obtenerArtesanias() {
        return this.artesanias;
    }

    /**
     * Método para buscar una artesanía por su ID.
     * @param {number} artesaniaId - ID de la artesanía a buscar.
     * @returns {Object|undefined} - Artesanía encontrada o undefined si no se encuentra.
     */
    obtenerArtesaniaPorId(artesaniaId) {
        artesaniaId = parseInt(artesaniaId); // Convertir a número

        const artesania = this.artesanias.find(artesania => artesania.id === artesaniaId);

        if (!artesania) {
            console.error('Artesanía no encontrada');
        } else {
            console.log('Artesanía encontrada:', artesania);
        }

        return artesania;
    }
}

// Ejemplo con datos
const tiendaArtesanias = new TiendaDeArtesanias();

tiendaArtesanias.agregarArtesania({
    nombre: 'Muñeca Wayuu',
    descripcion: 'Muñeca artesanal elaborada por la comunidad Wayuu.',
    precio: 50000,
    imagen: 'wayuu.jpg',
    codigo: 'WA001',
    stock: 20,
});

tiendaArtesanias.agregarArtesania({
    nombre: 'Cestería Embera',
    descripcion: 'Cesta tradicional de la comunidad Embera.',
    precio: 75000,
    imagen: 'embera.jpg',
    codigo: 'EM002',
    stock: 15,
});

console.log('Todas las artesanías:', tiendaArtesanias.obtenerArtesanias());

tiendaArtesanias.obtenerArtesaniaPorId(1);
tiendaArtesanias.obtenerArtesaniaPorId(3);
