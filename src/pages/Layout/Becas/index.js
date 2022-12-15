import React from "react";
import beca1 from "../../../assets/beca-global.png";
import { CardBeca } from "../../../components/beca/CardBeca";
import "../../../styles/Becas.css";

function Becas(){
    return(
        <div className="becas"> 
            <h1>Becas Disponibles</h1>
            <div className="container">
                <CardBeca picture={beca1} title="Jovenes Escribiendo el Futuro"/>
                <CardBeca picture={beca1} title="Beca de Manutención"/>
            </div>
            <br></br>
            <h1>Becas Próximas</h1>
            <div className="container">
                <CardBeca picture={beca1} title="Beca de Residencia"/>
                <CardBeca picture={beca1} title="Beca de Servicio Social"/>
            </div>
        </div>
    );
}

export { Becas };