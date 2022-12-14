import React from 'react';
import '../../styles/NavBar.css'

function NavBar(){
    return(
        <div className="comp-navbar">
            <ul>
                <li><a href='/'>Inicio</a></li>
                <li><a href='/persona'>Mi Información</a></li>
                <li><a href='/inscripcion'>Becas</a></li>
                <li><a href='/carrera'>Extra Escolares</a></li>
            </ul>
        </div>
    );
}

export { NavBar };