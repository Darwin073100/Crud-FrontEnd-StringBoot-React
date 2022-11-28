import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../../styles/Home.css";
import Student from '../../assets/persona.svg';
import Inscriptionn from '../../assets/inscription.svg';
import Career from '../../assets/carrera.svg';
import Home from '../../assets/home.svg';

function Layout() {
  return (
    <div className="comp-layout">
      <Link className="item" to="/">
        <img src={Home} alt="Home"/>
      </Link>
      <Link className="item" to="/persona">
        <img src={Student} alt="Student"/>
      </Link>
      <Link className="item" to="/inscripcion">
        <img src={Inscriptionn} alt="Inscription"/>
      </Link>
      <Link className="item" to="/carrera">
        <img src={Career} alt="Career"/>
      </Link>
      <Outlet />
    </div>
  );
}

export { Layout };
