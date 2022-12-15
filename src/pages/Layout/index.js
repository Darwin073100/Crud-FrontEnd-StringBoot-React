import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../../styles/Home.css";
import Student from "../../assets/persona.svg";
import Inscriptionn from "../../assets/inscription.svg";
import Career from "../../assets/carrera.svg";
import Home from "../../assets/logo.jpg";
import ITSCCH from "../../assets/ubn.jpg";

function Layout() {
  return (
    <div className="home">
      <div className="img-back">
        <img src={ITSCCH} alt="FONDO"/>
      </div>
      <div className="comp-layout">
        <Link className="item" to="/" title="Inicio">
          <img src={Home} alt="Home" />
        </Link>
        <Link className="item" to="/information" title="Información Personal">
          <img src={Student} alt="Student" />
        </Link>
        <Link className="item" to="/becas" title="Becas Disponibles">
          <img src={Inscriptionn} alt="Inscription" />
        </Link>
        <Link className="item" to="/extra" title="Actividades Extra Escolares">
          <img src={Career} alt="Career" />
        </Link>
        <Outlet />
      </div>
    </div>
  );
}

export { Layout };
