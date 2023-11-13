import PropTypes from "prop-types";

function Metros2({ selectMetros2, metrosSeleccionados }) {
    return (
      <div>
        <label htmlFor="metros2">Ingresa los Metros cuadrados:</label>
        <input type="number" id="metros2" min="20" max="500" value={selectMetros2} onChange={metrosSeleccionados} required />
      </div>
    );
  }

  Metros2.propTypes = {
    selectMetros2: PropTypes.string.isRequired,
    metrosSeleccionados: PropTypes.func.isRequired,
  };  

export default Metros2;