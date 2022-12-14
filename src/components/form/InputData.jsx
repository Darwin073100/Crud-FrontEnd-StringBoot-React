import React from "react";

function InputData({label,type, value}){
    return(
        <div className="item">
            <label><strong>{label}</strong>:</label>
            <input type={type} value={value}/>
        </div>
    )
}

export {InputData};