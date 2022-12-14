import React from "react";
import ITSCCH from "../../../assets/itscch.jpg";
import Avatar from "../../../assets/avatar.jpg";
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
        <div className="content"></div>
      </div>
    </div>
  );
}

export { Information };
