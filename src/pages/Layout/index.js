import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout(){
    return(
        <div className="comp-layout">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/persona">Persona</Link></li>
                <li><Link to="/inscripcion">Inscripcion</Link></li>
                <li><Link to="/carrera">Carrera</Link></li>
            </ul>
            <Outlet />
        </div>
    );
}

export { Layout };