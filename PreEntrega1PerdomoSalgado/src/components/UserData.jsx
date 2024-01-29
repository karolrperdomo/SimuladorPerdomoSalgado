// Importación de React y PropTypes desde la biblioteca prop-types
import React from "react";
import { PropTypes } from "prop-types";

// Definición del componente funcional UserData
const UserData = ({ firstName, lastName, age, birthdate, myObject }) => {
    // Renderizado del componente
    return (
        <div>
            {/* Lista no ordenada que muestra la información del usuario */}
            <ul>
                <li>{firstName}</li>
                <li>{lastName}</li>
                <li>{age}</li>
                <li>{birthdate}</li>
            </ul>
        </div>
    );
};

// Exportación del componente UserData
export default UserData;

// Definición de los tipos de propiedades esperados y sus validaciones
UserData.propTypes = {
    // Propiedad firstName de tipo string
    firstName: PropTypes.string,
    // Propiedad lastName de tipo string
    lastName: PropTypes.string,
    // Propiedad age de tipo number
    age: PropTypes.number,
    // Propiedad birthdate de tipo string
    birthdate: PropTypes.string,
    // Nota: myObject no se está utilizando en el componente, puedes eliminarlo si no es necesario
    myObject: PropTypes.any,
};