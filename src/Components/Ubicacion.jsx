import PropTypes from "prop-types";

function Ubicacion({ selectedUbicacion, ubicacionSelectedChange, datosUbicacion, sinDatos }) {
    return (
      <div>
        <label htmlFor="ubicacion">Selecciona su ubicación</label>
        <select value={selectedUbicacion} onChange={ubicacionSelectedChange} id="ubicacion" className={sinDatos || !selectedUbicacion == "" ? "" : "bordeRojo"}>
          {sinDatos || !selectedUbicacion == "" ? (
          <option value="" disabled>Seleccione</option>
          ) : (
            <option value="" disabled>Por favor complete los datos</option>)}
          {datosUbicacion.map(({ factor, tipo }, id) => (
            <option key={id} value={factor}>
              {tipo}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
  Ubicacion.propTypes = {
    selectedUbicacion: PropTypes.string.isRequired,
    ubicacionSelectedChange: PropTypes.func.isRequired,
    datosUbicacion: PropTypes.array.isRequired,
    sinDatos: PropTypes.bool.isRequired,
  };

  export default Ubicacion;