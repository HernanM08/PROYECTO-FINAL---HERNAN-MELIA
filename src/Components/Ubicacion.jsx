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
  
  export default Ubicacion;