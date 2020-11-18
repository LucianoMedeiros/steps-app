import React from "react";
import ButtonNext from "./components/navButtons/next";
import ButtonPrev from "./components/navButtons/prev";

const stepTwo = (props) => {
  return (
    <>
      <h2>Step 2</h2>
      <ul>
        <li>CNPJ</li>
        <li>Razão Social</li>
        <li>Nome Fantasia</li>
        <li>CPF do Sócio</li>
        <li>Email</li>
        <li>Telefone Fixo</li>
        <li>Telefone Celular</li>
        <li>Optin Termos e Regulamento</li>
      </ul>
      <ButtonPrev>Voltar</ButtonPrev>
      <ButtonNext>Continuar</ButtonNext>
    </>
  );
};
export default stepTwo;
