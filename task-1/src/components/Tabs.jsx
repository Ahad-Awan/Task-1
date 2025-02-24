import React, { useState } from "react";
import Button from "./Button";

const Tabs = () => {
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);
  const [d, setD] = useState(false);

  function handleA() {
    setA(true);
    setB(false);
    setC(false);
    setD(false);
  }
  function handleB() {
    setA(false);
    setB(true);
    setC(false);
    setD(false);
  }
  function handleC() {
    setA(false);
    setB(false);
    setC(true);
    setD(false);
  }
  function handleD() {
    setA(false);
    setB(false);
    setC(false);
    setD(true);
  }

  return (
    <div>
      <Button text={"A"} />
      <Button text={"B"} />
      <Button text={"C"} />
      <Button text={"D"} />
    </div>
  );
};

export default Tabs;
