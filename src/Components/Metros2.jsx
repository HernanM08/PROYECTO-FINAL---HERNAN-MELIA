function Metros2({ selectMetros2, metrosSeleccionados }) {
    return (
      <div>
        <label htmlFor="metros2">Ingresa los Metros cuadrados:</label>
        <input type="number" id="metros2" min="20" max="500" value={selectMetros2} onChange={metrosSeleccionados} required />
      </div>
    );
  }
  
  export default Metros2;