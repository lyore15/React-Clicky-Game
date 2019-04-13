import React from "react";
import "./Card.css";


const Card = props => (

  <div className="card" onClick={() => props.pleaseWork(props.id)}>
    <div className="img-container">
      <img
        className="img-thumbnail"
        alt={props.name}
        src={props.image} />
    </div>
  </div>
);

export default Card;