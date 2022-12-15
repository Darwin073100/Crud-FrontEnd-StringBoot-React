import React from "react";

function CardBeca({picture, title}){
    return(
        <div className="card-beca">
            <div className="card-header">
                <img src={ picture } alt="Becas"/>
            </div>
            <div className="card-body">
                <h2>{ title }</h2>
            </div>
            <div className="card-fooder">
                <button className="btn-primary">Solicitar</button>
                <button className="btn-error">Quitar</button>
            </div>
        </div>
    );
}

export { CardBeca };