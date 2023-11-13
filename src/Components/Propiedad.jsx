import PropTypes from "prop-types";

function Propiedad({ selectedPropiedad, propiedadSelectedChange, datosPropiedad, sinDatos }) {
  return (
    <div>
      <label htmlFor="propiedad">Selecciona el tipo de propiedad</label>
      <select value={selectedPropiedad} onChange={propiedadSelectedChange} id="propiedad" className={sinDatos || !selectedPropiedad == "" ? "" : "bordeRojo"}>
        {sinDatos || !selectedPropiedad == "" ? (
        <option value="" disabled>Seleccione</option>
        ) : (
          <option value="" disabled>Por favor complete los datos</option>)}
        {datosPropiedad.map(({ factor, tipo }, id) => (
          <option key={id} value={factor}>
            {tipo}
          </option>
        ))}
      </select>
    </div>
  );
}

Propiedad.propTypes = {
  selectedPropiedad: PropTypes.string.isRequired,
  propiedadSelectedChange: PropTypes.func.isRequired,
  datosPropiedad: PropTypes.array.isRequired,
  sinDatos: PropTypes.bool.isRequired,
};

export default Propiedad;