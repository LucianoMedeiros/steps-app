import React from "react";
import ButtonNext from "./components/navButtons/next";

const stepOne = (props) => {
  //Precisa retornar booleano para continuar
  function customClick() {
    console.log("uuuuuuuuu");
    return true;
  }
  return (
    <>
      <h2>Step 1</h2>
      <ul>
        <li>CNPJ</li>
        <li>Optin com Switch</li>
      </ul>
      <ButtonNext onClick={customClick}>Continuar</ButtonNext>
    </>
  );
};
export default stepOne;
