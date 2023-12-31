import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Propiedad from "../Components/Propiedad";
import Ubicacion from "../Components/Ubicacion";
import Metros2 from "../Components/Metros2";
import jsonPropiedad from "../propiedad.json";
import jsonUbicacion from "../ubicacion.json";
import House from "../img/house-lock-solid.svg";

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

const dataCompleta = () =>
    selectedPropiedad !== "" &&
    selectedUbicacion !== "" &&
    parseFloat(selectMetros2) >= 20 
      ? true
      : false;

  const cotizarPoliza = () => (dataCompleta() ? cotizar() : alerta());

  const [sinDatos, setSinDatos] = useState(true);
  const alerta = () => {
    setSinDatos(false);
  };
  const cotizar = () => {
    setSinDatos(true); 
        
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
        window.location.reload();
    }

    return (
        <div>
           <div className="historial">
                <Link to="/historial">
                    <button title="Ver Historial" className="botonHistorial">Ver Historial</button>
                </Link>
            </div>
            <h1 className="center separador">Alliance - Seguros para el Hogar</h1>
            <div className="imagenHouse">
                <img src={House} alt="imghouse" />
            </div>
            <div className=" center div-cotizador">
                <h2 className="center separador">Complete los datos para cotizar su seguro de hogar</h2>
             
                <Propiedad
                selectedPropiedad={selectedPropiedad}
                propiedadSelectedChange={propiedadSelectedChange}
                datosPropiedad={datosPropiedad}
                sinDatos={sinDatos}
                />

                <Ubicacion
                selectedUbicacion={selectedUbicacion}
                ubicacionSelectedChange={ubicacionSelectedChange}
                datosUbicacion={datosUbicacion}
                sinDatos={sinDatos}
                />      
                
                <Metros2
                selectMetros2={selectMetros2}
                metrosSeleccionados={metrosSeleccionados}
                sinDatos={sinDatos}
                />

                <div>
                    <div className="center separador">
                        <button onClick={cotizarPoliza} className="button button-outline">{""}Cotizar{""}</button>
                    </div>
                    <div className="center separador">
                        <p className="importe">Precio estimado: ${""} <span id="valorPoliza">{data.poliza.toFixed(2)}</span><button className="guardarocultar" onClick={guardarHistorial} title="Guardar en historial">Registrar</button></p>
                    </div>
                </div>

            </div>
        </div>
    )
}
