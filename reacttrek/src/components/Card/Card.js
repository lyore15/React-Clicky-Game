import React from "react";
import "./Card";

const Card = props =>  (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.clickedImageId} />

      </div>
    </div>
  );

export default Card;