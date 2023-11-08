import { Link } from "react-router-dom"
import { useState } from "react";

export default function Historial() {
    
    const [historialCotizaciones, setHistorialCotizaciones] = useState(
        JSON.parse(localStorage.getItem("historialCotizaciones")) ?? {
            fechaCotizacion: "",
            propiedad: "",
            ubicacion: "",
            metros2: "",
            poliza: "",
        }
    )

    return (
        <div>
            {" "}
            <h1 className="center separador">Ver Historial 📋</h1>
            <div className=" center div-cotizador">
                <table>
                    <thead>
                        <tr>
                            <th>Fecha de cotización</th>
                            <th>Propiedad</th>
                            <th>Ubicación</th>
                            <th>Metros cuadrados</th>
                            <th>Póliza mensual</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historialCotizaciones.map((historialCotizaciones, id) => (
                        <tr key={id}>
                            <td>{historialCotizaciones.fechaCotizacion}</td>
                            <td>{historialCotizaciones.propiedad}</td>
                            <td>{historialCotizaciones.ubicacion}</td>
                            <td>{historialCotizaciones.metros2}</td>
                            <td>{historialCotizaciones.poliza}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <div className="center separador">
                    <Link to="/"><button className="button button-outline">VOLVER</button></Link>
                </div>
            </div>
        </div>
    )
}