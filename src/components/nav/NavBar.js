import React from 'react';
import '../../styles/NavBar.css'

function NavBar(){
    return(
        <div className="comp-navbar">
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/persona'>Alumnos</a></li>
                <li><a href='/inscripcion'>Inscripciones</a></li>
                <li><a href='/carrera'>Carreras</a></li>
            </ul>
        </div>
    );
}

export { NavBar };