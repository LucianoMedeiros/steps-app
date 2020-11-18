import React from "react";
import ButtonNext from "./components/navButtons/next";
import ButtonPrev from "./components/navButtons/prev";

const stepFive = (props) => {
  return (
    <>
      <h2>Step 5</h2>
      <ul>
        <li>Logomarca</li>
      </ul>
      <ButtonPrev>Voltar</ButtonPrev>
      <ButtonNext>Continuar</ButtonNext>
    </>
  );
};
export default stepFive;
