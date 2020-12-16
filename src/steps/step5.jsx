import React from "react";
import ButtonNext from "./components/navButtons/next";
import ButtonPrev from "./components/navButtons/prev";
import Layout from './../layout'

const stepFive = (props) => {
  return (
    <Layout 
      header={<h1>Step 5</h1>} 
      footer={
        <>
          <ButtonPrev>Voltar</ButtonPrev>
          <ButtonNext>Continuar</ButtonNext>
        </>
      }
    >
    <ul className="form-items">
        <li>
          <label htmlFor="">envie seu logo, ele será utilizado nas suas ofertas</label>
          <input type="file" name="" id=""/>
        </li>

      </ul>
      
    </Layout>
  );
};
export default stepFive;
