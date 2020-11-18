import React from "react";
import ButtonNext from "./components/navButtons/next";
import ButtonPrev from "./components/navButtons/prev";

const stepThree = (props) => {
  return (
    <>
      <h2>Step 3</h2>
      <ul>
        <li>Nome Unidade</li>
        <li>CEP</li>
        <li>Rua</li>
        <li>Numero</li>
        <li>Complemento</li>
        <li>Bairro</li>
        <li>Cidade</li>
        <li>Estado</li>
      </ul>
      <ButtonPrev>Voltar</ButtonPrev>
      <ButtonNext>Continuar</ButtonNext>
    </>
  );
};
export default stepThree;
