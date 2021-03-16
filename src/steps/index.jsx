import React, { useState } from "react";
import RenderStepsSwitch from "./renderStepsSwitch";
import  SMS  from "../teste/SMS";
import { CNPJ, CPF, CEP, Telefone, Celular, Estado, Email, Url, Text } from './components/fields'

const StepForm = (props) => {
  const [values, setValues] = useState({});

  const handleChange = ({ target: { id, value } }) => {
    switch (id) {
      case 'mail':
        setValues({ ...values, mail: value });
        break;
        case 'mail':
          setValues({ ...values, cel: value });
          break;
          case 'tel':
          setValues({ ...values, tel: value });
          break;
        case 'cep':
          setValues({ ...values, cep: value });
          break;
      case 'cpf':
          setValues({ ...values, cpf: value });
          break;
          case 'cnpj':
              setValues({ ...values, cnpj: value });
            break;
            case 'text1':
                setValues({ ...values, text1: value });
              break;
          
        default:
          console.log('default')
        break;
    }
  }
  return (
    <>
      {/* 
        <Text label="nome" id="text1"  onChange={ handleChange } style={{ margin: '10px 50px' }} isNumeric minLength={3} isNumeric maxLength={10} />
        <Url label="url" id="url" style={{ margin: '10px 50px' }} />
        <Email label="email" id="mail" style={{ margin: '10px 50p x' }} />
        <Estado id="uf" label="Estado" style={{ margin: '10px 50px' }}  />
        <Celular label="cel" id="cel" onChange={ handleChange } required value={ values.cel } style={{ margin: '10px 50px' }} />
        <Telefone label="tel" id="tel" onChange={ handleChange } required value={ values.tel } style={{ margin: '10px 50px' }} />
        <CEP label="cep" id="cep" onChange={ handleChange } required value={ values.cep } style={{ margin: '10px 50px' }} />
        <CPF label="cpf" id="cpf" onChange={ handleChange } value={ values.cpf } style={{ margin: '10px 50px' }} />
        <CNPJ label="cnpj" id="cnpj" onChange={ handleChange } value={ values.cnpj } style={{ margin: '10px 50px' }} /> 
      <SMS />
      */}
      <RenderStepsSwitch />
    </>
  );
};

export default StepForm;
