import React from "react";
import { InputData } from "../../../components/form/InputData";
import { Table } from "../../../components/form/Table";
import ITSCCH from "../../../assets/itscch.jpg";
import Avatar from "../../../assets/avatar.jpg";
import "../../../styles/Information.css";
function Information() {
  return (
    <div className="information">
      <div className="img-back">
        <img src={ITSCCH} alt="FONDO" />
      </div>
      <div className="comp-information">
        <div className="img">
          <img src={Avatar} alt="FONDO" />
        </div>
        <h1>Datos Del Alumno</h1>
        <div className="content">
          <div className="datos">
            <InputData label="Nombre" type="text" value="Oscar" />
            <InputData label="Apellido Paterno" type="text" value="Liborio" />
            <InputData label="Apellido Materno" type="text" value="Huerta" />
            <InputData label="No. Control" type="text" value="18060015" />
            <InputData label="Direccion" type="text" value="Juchitan Guerrero" />
            <InputData label="Carrera" type="text" value="Ingeniería en Tics" />
            <InputData label="Ciudad" type="text" value="Ometepec Guerrero" />
            <InputData label="Codigo Postal" type="text" value="41700" />
          </div>
          <h1>Calificaciones</h1>
          <div className="boleta">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Information };
