// External Libraries 
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TextField, FormControlLabel, Switch } from '@material-ui/core';

// External Handlers
import { changeUserInfo } from '../store/actions/formUserActions';

// Components
import Layout from './../layout'
import ButtonNext from './components/navButtons/next';
import ButtonPrev from './components/navButtons/prev';


const StepTwo = (props) => {

  // Local States - Fields
  const [cnpj, setCnpj] = useState(props.cnpj);
  const [razaoSocial, setRazao] = useState(props.razaoSocial);
  const [nomeFantasia, setNomeFantasia] = useState(props.razaoSocial);
  const [cpf, setCpf] = useState(props.razaoSocial);
  const [email, setEmail] = useState(props.razaoSocial);
  const [telFixo, setTelFixo] = useState(props.razaoSocial);
  const [telCelular, setTelCelular] = useState(props.razaoSocial);
  const [optin, setOptin] = useState(false);

  // Local Handlers
  const changeField = ({ target: { id, value } }) => {
    switch (id) {
      case 'cnpj': setCnpj(value);                  break;
      case 'razaoSocial':   setRazao(value);        break;
      case 'nomeFantasia':  setNomeFantasia(value); break;
      case 'cpf':           setCpf(value);          break;
      case 'email':         setEmail(value);        break;
      case 'telFixo':       setTelFixo(value);      break;
      case 'telCelular':    setTelCelular(value);   break;
      default: console.log('default');
    }
  };
  
  const handleOptin = () => {
    setOptin(!optin);
  }

  function customClick() {
    props.changeUserInfo({ cnpj, razaoSocial });
    return true;
  }


  return (
    <Layout 
      header={<h1>Step 2</h1>} 
      footer={
        <>
          <ButtonPrev onClick={customClick}>Voltar</ButtonPrev>
          <ButtonNext onClick={customClick}>Continuar</ButtonNext>
        </>
      }
    >
      <ul className="form-items">
        <li>
          <TextField id="cnpj" label="CNPJ" size="small" variant="outlined" value={cnpj} onChange={changeField} fullWidth required />
        </li>
        <li>
          <TextField id="razaoSocial" label="Razão Social" size="small" variant="outlined" value={razaoSocial} onChange={changeField} fullWidth required />
        </li>
        <li>
          <TextField id="nomeFantasia" label="Nome Fantasia" size="small" variant="outlined" value={nomeFantasia} onChange={changeField} fullWidth required />
        </li>
        <li>
          <TextField id="cpf" label="CPF do Sócio" size="small" variant="outlined" value={cpf} onChange={changeField} fullWidth required />
        </li>
        <li>
          <TextField id="email" label="Email" size="small" variant="outlined" value={email} onChange={changeField} fullWidth required />
        </li>
        <li>
          <TextField id="telFixo" label="Telefone Fixo" size="small" variant="outlined" value={telFixo} onChange={changeField} fullWidth required />
        </li>
        <li>
          <TextField id="telCelular" label="Telefone Celular" size="small" variant="outlined" value={telCelular} onChange={changeField} fullWidth required />
        </li>
        <li>
          <FormControlLabel control={ <Switch required checked={optin} onChange={handleOptin} name="checkedB" color="primary" /> } label="Optin Termos e Regulamento" labelPlacement="End" />
        </li>
      </ul>
      
    </Layout>
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
