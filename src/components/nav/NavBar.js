import React from 'react';
import '../../styles/NavBar.css'
import logo from "../../assets/logo.jpg";

function NavBar(){
    return(
        <div className="comp-navbar">
            <img src={logo} />
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