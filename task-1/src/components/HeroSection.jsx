import React from "react";
import Cards from "./Cards";
import bird from "../assets/bird.webp";
import jellyfish from "../assets/jellyfish.jpg";

const HeroSection = () => {
  return (
    <div className="hero">
      <Cards
        image={bird}
        name="Parrot"
        price="2000"
        desc="Parrots are birds with strong beaks, colorful feathers, and clawed feet."
      />
      <Cards
        image={jellyfish}
        name="Jellyfish"
        price="5000"
        desc="Jellyfish are soft, boneless sea creatures with tentacles use to sting their prey. "
      />
      <Cards
        image={bird}
        name="Parrot"
        price="2000"
        desc="Parrots are birds with strong beaks, colorful feathers, and clawed feet."
      />
    </div>
  );
};

export default HeroSection;
