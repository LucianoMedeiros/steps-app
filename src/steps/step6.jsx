import React from "react";
import ButtonPrev from "./components/navButtons/prev";
import Layout from './../layout'

const stepSix = (props) => {
  return (
    <Layout 
      header={<h1>Step 6</h1>} 
      footer={
        <>
          <ButtonPrev>Voltar</ButtonPrev>
        </>
      }
    >
    <ul className="form-items">
        <li>Sucesso!</li>
      </ul>
      
    </Layout>
  );
};
export default stepSix;
