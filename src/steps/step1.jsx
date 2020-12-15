import React, { useState } from 'react';
import { connect } from 'react-redux';

import ButtonNext from './components/navButtons/next';
import Input from './components/fields/Input';

import { changeUserInfo } from '../store/actions/formUserActions';

const StepOne = (props) => {
  const [cnpj, setCnpj] = useState(props.cnpj);
  const [razaoSocial, setRazao] = useState(props.razaoSocial);
  const changeField = ({ target: { value } }) => {
    setCnpj(value);
  };

  function customClick() {
    props.changeUserInfo({ cnpj, razaoSocial });
    return true;
  }
  return (
    <>
      <h2>Step 1</h2>
      <ul>
        <li>
          <Input label="CNPJ" id="cnpj" value={cnpj} onChange={changeField} />
        </li>
        <li>
          <Input label="Optin com Switch" id="optin1" type="checkbox" />
        </li>
      </ul>
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
export default connect(mapStateToProps, mapDispatchToProps)(StepOne);
