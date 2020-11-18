import React from "react";
import ButtonNext from "./components/navButtons/next";
import ButtonPrev from "./components/navButtons/prev";

const stepFour = (props) => {
  return (
    <>
      <h2>Step 4</h2>
      <ul>
        <li>Ramo de atuação</li>
        <li>Descrição</li>
        <li>Possui Loja virtual?</li>
        <li>Quais benefícios quer oferecer?</li>
      </ul>
      <ButtonPrev>Voltar</ButtonPrev>
      <ButtonNext>Continuar</ButtonNext>
    </>
  );
};
export default stepFour;
