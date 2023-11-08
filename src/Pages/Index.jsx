import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import jsonPropiedad from "../propiedad.json";
import jsonUbicacion from "../ubicacion.json";

export default function Index() {

    const [datosPropiedad, setDatosPropiedad] = useState([]);

    useEffect(() => {
        setDatosPropiedad(jsonPropiedad)
    }, []);
    
    const [selectedPropiedad, setSelectedPropiedad] = useState("");
    const [selectedTextPropiedad, setSelectedTextPropiedad] = useState("");
    const propiedadSelectedChange = (e) => {
        setSelectedPropiedad(e.target.value);
    const selectedIndex = e.target.selectedIndex;
    const selectedTextPropiedad = e.target.options[selectedIndex].text;
        setSelectedTextPropiedad(selectedTextPropiedad)
    };

    const [datosUbicacion, setDatosUbicacion] = useState([]);

    useEffect(() => {
        setDatosUbicacion(jsonUbicacion)
    }, []);
    
    const [selectedUbicacion, setSelectedUbicacion] = useState("");
    const [selectedTextUbicacion, setSelectedTextUbicacion] = useState("");
    const ubicacionSelectedChange = (e) => {
        setSelectedUbicacion(e.target.value);
    const selectedIndex = e.target.selectedIndex;
    const selectedTextUbicacion = e.target.options[selectedIndex].text;
        setSelectedTextUbicacion(selectedTextUbicacion);
    };

    const [selectMetros2, setSelectMetros2] = useState("");
    const metrosSeleccionados = ({ target }) => {
        setSelectMetros2(target.value);
        };

    const [data, setData] = useState({
        costoM2: 35.86,
        poliza: 0
        });

    const cotizarPoliza = () => {
        const poliza = data.costoM2 * parseFloat(selectedPropiedad) * parseFloat(selectedUbicacion) * parseFloat(selectMetros2);
             setData({ ...data, poliza:poliza });
     };
    
    const guardarHistorial = () => {
        const cotizacion = {
            fechaCotizacion: new Date().toLocaleString(),
            propiedad: selectedTextPropiedad,
            ubicacion: selectedTextUbicacion,
            metros2: selectMetros2,
            poliza: data.poliza.toFixed(2),
        };

        const historialCotizaciones = 
            JSON.parse(localStorage.getItem("historialCotizaciones")) || [];
        historialCotizaciones.push(cotizacion);
        localStorage.setItem("historialCotizaciones", JSON.stringify(historialCotizaciones));
    }


    return (
        <div>
           <div className="historial">
                <Link to="/historial">
                    <span title="Ver Historial">📋</span>
                </Link>
            </div>
            <h1 className="center separador">Seguros del hogar 🏡</h1>
            <div className=" center div-cotizador">
                <h2 className="center separador">Completa los datos solicitados</h2>
             
                <div>
                    <label htmlFor="propiedad">Selecciona el tipo de propiedad</label>
                    <select value={selectedPropiedad} onChange={propiedadSelectedChange} id="propiedad">
                        <option value="" disabled>Seleccione</option>
                        {datosPropiedad.map(( { factor, tipo }, id) => (
                        <option key={id} value={factor}>
                            {tipo}
                        </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="ubicacion">Selecciona su ubicación</label>
                    <select value={selectedUbicacion} onChange={ubicacionSelectedChange} id="ubicacion">
                        <option value="" disabled>Seleccione</option>
                        {datosUbicacion.map(( { factor, tipo}, id) => (
                        <option key={id} value={factor}>
                            {tipo}
                        </option>
                        ))}
                    </select>
                </div>
                
                <div>
                    <label htmlFor="metros2">Ingresa los Metros cuadrados:</label>
                    <input type="number" id="metros2" min="20" max="500" value={selectMetros2} onChange={metrosSeleccionados} required />
                </div>

                <div>
                    <div className="center separador">
                        <button onClick={cotizarPoliza} className="button button-outline">{""}Cotizar{""}</button>
                    </div>
                    <div className="center separador">
                        <p className="importe">Precio estimado: ${""} <span id="valorPoliza">{data.poliza.toFixed(2)}</span><span className="guardar ocultar" onClick={guardarHistorial} title="Guardar en historial"> 💾 </span></p>
                    </div>
                </div>

            </div>
        </div>
    )
}
