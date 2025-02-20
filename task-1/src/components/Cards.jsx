import React from "react";
import image from "../assets/bird.webp";
import Button from "./Button";

const Cards = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.image} alt="Image" />
        <div className="description">
          <h2>{props.name}</h2>
          <h3>{props.price}</h3>
          <p className="para">{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
