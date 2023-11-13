import PropTypes from "prop-types";

function Metros2({ selectMetros2, metrosSeleccionados, sinDatos }) {
    return (
      <div className="Div-SelectorNumero">
            {!(sinDatos || parseFloat(selectMetros2) >= 20) ? (
              <p className="mensajeVacio">Cargar Datos por favor</p>
            ) : (
              ""
            )}

            <label htmlFor="metros2">
              <span className="list-item-circle"></span>Ingresa los Metros
              cuadrados:
            </label>
            <input className={sinDatos || parseFloat(selectMetros2) >= 20 ? "" : "bordeRojo"} type="number" id="metros2" value={selectMetros2} onChange={metrosSeleccionados} min="20" max="500" required/>
        </div>
    );
}

  Metros2.propTypes = {
    selectMetros2: PropTypes.string.isRequired,
    metrosSeleccionados: PropTypes.func.isRequired,
    sinDatos: PropTypes.bool.isRequired,
  };  

export default Metros2;