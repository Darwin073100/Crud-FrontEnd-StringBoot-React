import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../../styles/Home.css";
import Student from "../../assets/persona.svg";
import Inscriptionn from "../../assets/inscription.svg";
import Career from "../../assets/carrera.svg";
import Home from "../../assets/home.svg";
import ITSCCH from "../../assets/itscch.jpg";

function Layout() {
  return (
    <div className="home">
      <div className="img-back">
        <img src={ITSCCH} alt="FONDO"/>
      </div>
      <div className="comp-layout">
        <Link className="item" to="/">
          <img src={Home} alt="Home" />
        </Link>
        <Link className="item" to="/information">
          <img src={Student} alt="Student" />
        </Link>
        <Link className="item" to="/becas">
          <img src={Inscriptionn} alt="Inscription" />
        </Link>
        <Link className="item" to="/extra">
          <img src={Career} alt="Career" />
        </Link>
        <Outlet />
      </div>
    </div>
  );
}

export { Layout };
