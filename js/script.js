document.addEventListener("DOMContentLoaded", function () {
  const enviarButton = document.querySelector(".enviar");
  enviarButton.addEventListener("click", function () {
    // Obtener los valores de los campos
    const nombreInput = document.getElementById("nombre");
    const telefonoInput = document.getElementById("telefono");
    const correoInput = document.getElementById("correo");
    const asuntoInput = document.getElementById("asunto");
    const mensajeTextarea = document.getElementById("mensaje");
    
    // Validar que los campos no estén vacíos
    if (
      nombreInput.value.trim() === "" ||
      telefonoInput.value.trim() === "" ||
      correoInput.value.trim() === "" ||
      asuntoInput.value.trim() === "" ||
      mensajeTextarea.value.trim() === ""
    ) {
      alert("Por favor, complete todos los campos.");
    } else {
      const formData = {
        nombre: nombreInput.value,
        telefono: telefonoInput.value,
        correo: correoInput.value,
        asunto: asuntoInput.value,
        mensaje: mensajeTextarea.value,
      };
      // Agregar datos a la tabla
      agregarDatosATabla(formData);
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
    });
    celdaBorrar.appendChild(botonBorrar);
    fila.appendChild(celdaBorrar);
    datosGuardados.appendChild(fila);
  }
});
