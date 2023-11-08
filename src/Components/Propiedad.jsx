function Propiedad({ selectedPropiedad, propiedadSelectedChange, datosPropiedad }) {
  return (
    <div>
      <label htmlFor="propiedad">Selecciona el tipo de propiedad</label>
      <select value={selectedPropiedad} onChange={propiedadSelectedChange} id="propiedad">
        <option value="" disabled>Seleccione</option>
        {datosPropiedad.map(({ factor, tipo }, id) => (
          <option key={id} value={factor}>
            {tipo}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Propiedad;