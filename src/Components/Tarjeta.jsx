import React from "react";
import './Tarjeta.css'
const Tarjeta = (props) => {
    const tarjetita = props.tarjetita
    /*No me funciono la API :( */
  return (
    <div>
        <div className="contenedor">
            <div className="imagen">
                <img src='/image1.svg'alt="Ejercicio de gimnasio" />
            </div>
            <div className="contenedor-texto">
                <h3 className="tarjeta-nombre">Puxada frontal</h3>
                <p>3 séries x 12 repetições</p>
            </div>
            <div className="icono">
            <img src='/Icons.svg' alt="icono-flecha-de-ingreso" />
            </div>

        </div>
        <div className="contenedor">
            <div className="imagen">
                <img src='/image2.svg' alt="Ejercicio de gimnasio" />
            </div>
            <div className="contenedor-texto">
                <h3 className="tarjeta-nombre">Remada curvada</h3>
                <p>3 séries x 12 repetições</p>
            </div>
            <div className="icono">
            <img src='/Icons.svg' alt="icono-flecha-de-ingreso" />
            </div>
        </div>
        <div className="contenedor">
            <div className="imagen">
                <img src='/image3.svg' alt="imagen" />
            </div>
            <div className="contenedor-texto">
                <h3 className="tarjeta-nombre">Remada unilateral</h3>
                <p>3 séries x 12 repetições</p>
            </div>
            <div className="icono">
            <img src='/Icons.svg' alt="icono-flecha-de-ingreso" />
            </div>

        </div>
        <div className="contenedor">
            <div className="imagen">
                <img src='/image4.svg' alt="imagen" />
            </div>
            <div className="contenedor-texto">
                <h3 className="tarjeta-nombre">Levantamento terra</h3>
                <p>3 séries x 12 repetições</p>
            </div>
            <div className="icono">
            <img src='/Icons.svg' alt="icono-flecha-de-ingreso" />
            </div>

        </div>
      </div>
    
  );
};

export default Tarjeta;