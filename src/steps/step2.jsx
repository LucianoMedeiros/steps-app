import React, { useState } from 'react';
import { connect } from 'react-redux';

import ButtonNext from './components/navButtons/next';
import ButtonPrev from './components/navButtons/prev';
import Input from './components/fields/Input';

import { changeUserInfo } from '../store/actions/formUserActions';

const StepTwo = (props) => {
  const [cnpj, setCnpj] = useState(props.cnpj);
  const [razaoSocial, setRazao] = useState(props.razaoSocial);
  const changeField = ({ target: { id, value } }) => {
    switch (id) {
      case 'cnpj':
        setCnpj(value);
        break;
      case 'razaoSocial':
        setRazao(value);
        break;
      default:
        console.log('default');
    }
  };

  function customClick() {
    props.changeUserInfo({ cnpj, razaoSocial });
    return true;
  }
  return (
    <>
      <h2>Step 2</h2>
      <ul>
        <li>
          <Input label="CNPJ" id="cnpj" value={cnpj} onChange={changeField} />
        </li>
        <li>
          <Input
            label="Razão Social"
            id="razaoSocial"
            value={razaoSocial}
            onChange={changeField}
          />
        </li>
        <li>Nome Fantasia</li>
        <li>CPF do Sócio</li>
        <li>Email</li>
        <li>Telefone Fixo</li>
        <li>Telefone Celular</li>
        <li>Optin Termos e Regulamento</li>
      </ul>
      <ButtonPrev onClick={customClick}>Voltar</ButtonPrev>
      <ButtonNext onClick={customClick}>Continuar</ButtonNext>
    </>
  );
};
function mapStateToProps(state) {
  return {
    cnpj: state.formUser.fields.cnpj,
    razaoSocial: state.formUser.fields.razaoSocial,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    changeUserInfo(userInfo) {
      const action = changeUserInfo(userInfo);
      dispatch(action);
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(StepTwo);
