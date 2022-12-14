import React from 'react';
import '../../styles/NavBar.css'

function NavBar(){
    return(
        <div className="comp-navbar">
            <ul>
                <li><a href='/'>Inicio</a></li>
                <li><a href='/information'>Mi Información</a></li>
                <li><a href='/becas'>Becas</a></li>
                <li><a href='/extra'>Extra Escolares</a></li>
            </ul>
        </div>
    );
}

export { NavBar };