import PropTypes from "prop-types";

function Ubicacion({ selectedUbicacion, ubicacionSelectedChange, datosUbicacion }) {
    return (
      <div>
        <label htmlFor="ubicacion">Selecciona su ubicación</label>
        <select value={selectedUbicacion} onChange={ubicacionSelectedChange} id="ubicacion">
          <option value="" disabled>Seleccione</option>
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
    ubicacionSelectedChange: PropTypes.string.isRequired,
    datosUbicacion: PropTypes.string.isRequired,
  };

  export default Ubicacion;