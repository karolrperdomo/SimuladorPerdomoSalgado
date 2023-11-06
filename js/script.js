document.addEventListener("DOMContentLoaded", function () {
  const enviarButton = document.querySelector(".enviar");
  const nombreInput = document.getElementById("nombre");
  const telefonoInput = document.getElementById("telefono");
  const correoInput = document.getElementById("correo");
  const asuntoInput = document.getElementById("asunto");
  const mensajeTextarea = document.getElementById("mensaje");

  // Cargar datos guardados al iniciar la página
  cargarDatosGuardados();

  enviarButton.addEventListener("click", function () {
    // Obtener los valores de los campos
    const nombre = nombreInput.value;
    const telefono = telefonoInput.value;
    const correo = correoInput.value;
    const asunto = asuntoInput.value;
    const mensaje = mensajeTextarea.value;

    // Validar que los campos no estén vacíos
    if (
      nombre.trim() === "" ||
      telefono.trim() === "" ||
      correo.trim() === "" ||
      asunto.trim() === "" ||
      mensaje.trim() === ""
    ) {
      alert("Por favor, complete todos los campos.");
    } else {
      const formData = {
        nombre,
        telefono,
        correo,
        asunto,
        mensaje,
      };

      // Agregar datos a la tabla
      agregarDatosATabla(formData);

      // Guardar los datos en el almacenamiento local
      guardarDatos(formData);

      // Limpiar los campos después de enviar
      nombreInput.value = "";
      telefonoInput.value = "";
      correoInput.value = "";
      asuntoInput.value = "";
      mensajeTextarea.value = "";
    }
  });

  function agregarDatosATabla(formData) {
    const datosGuardados = document.getElementById("datosGuardados");
    const fila = document.createElement("tr");
    for (const key in formData) {
      const celda = document.createElement("td");
      celda.textContent = formData[key];
      fila.appendChild(celda);
    }
    const celdaBorrar = document.createElement("td");
    const botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Borrar";
    botonBorrar.addEventListener("click", function () {
      fila.remove();
      // Eliminar los datos del almacenamiento local cuando se borran de la tabla
      eliminarDatos(formData);
    });
    celdaBorrar.appendChild(botonBorrar);
    fila.appendChild(celdaBorrar);
    datosGuardados.appendChild(fila);
  }

  function guardarDatos(formData) {
    const datosGuardados = JSON.parse(localStorage.getItem("datosGuardados")) || [];
    datosGuardados.push(formData);
    localStorage.setItem("datosGuardados", JSON.stringify(datosGuardados));
  }

  function cargarDatosGuardados() {
    const datosGuardados = JSON.parse(localStorage.getItem("datosGuardados")) || [];
    for (const formData of datosGuardados) {
      agregarDatosATabla(formData);
    }
  }

  function eliminarDatos(formData) {
    const datosGuardados = JSON.parse(localStorage.getItem("datosGuardados")) || [];
    const newData = datosGuardados.filter((data) => JSON.stringify(data) !== JSON.stringify(formData));
    localStorage.setItem("datosGuardados", JSON.stringify(newData));
  }
});
