// External Libraries 
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TextField, FormControlLabel, Switch } from '@material-ui/core';

// External Handlers
import { changeCnpjUserInfo } from '../store/actions/cnpjUserActions';
import { changeBusinessInfo } from '../store/actions/businessInfoUserActions';

// Components
import Layout from './../layout'
import ButtonNext from './components/navButtons/next';
import ButtonPrev from './components/navButtons/prev';


const StepTwo = (props) => {
  
  // Local States - Fields
  const [cnpj, setCnpj]               = useState(props.cnpj);
  const [companyName, setCompanyName] = useState(props.companyName);
  const [fantasyName, setFantasyName] = useState(props.fantasyName);
  const [cpf, setCpf]                 = useState(props.cpf);
  const [email, setEmail]             = useState(props.email);
  const [phone, setPhone]             = useState(props.phone);
  const [cellphone, setCellphone]     = useState(props.cellphone);
  const [acceptedRegulation, setAcceptedRegulation]             = useState(props.acceptedRegulation);

  // Local Handlers
  const changeField = ({ target: { id, value } }) => {
    switch (id) {
      case 'cnpj': setCnpj(value);                  break;
      case 'companyName':   setCompanyName(value);  break;
      case 'fantasyName':   setFantasyName(value);  break;
      case 'cpf':           setCpf(value);          break;
      case 'email':         setEmail(value);        break;
      case 'phone':         setPhone(value);        break;
      case 'cellphone':     setCellphone(value);    break;
      case 'acceptedRegulation': setAcceptedRegulation(!acceptedRegulation); break;
      default: console.log('default');
    }
  };

  function customClick() {
    props.changeCnpjUserInfo({ cnpj });
    props.changeBusinessInfo({ companyName, fantasyName, cpf, email, phone, cellphone, acceptedRegulation});
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
          <TextField id="companyName" label="Razão Social" size="small" variant="outlined" value={companyName} onChange={changeField} fullWidth required />
        </li>
        <li>
          <TextField id="fantasyName" label="Nome Fantasia" size="small" variant="outlined" value={fantasyName} onChange={changeField} fullWidth required />
        </li>
        <li>
          <TextField id="cpf" label="CPF do Sócio" size="small" variant="outlined" value={cpf} onChange={changeField} fullWidth required />
        </li>
        <li>
          <TextField id="email" label="Email" size="small" variant="outlined" value={email} onChange={changeField} fullWidth required />
        </li>
        <li>
          <TextField id="phone" label="Telefone Fixo" size="small" variant="outlined" value={phone} onChange={changeField} fullWidth required />
        </li>
        <li>
          <TextField id="cellphone" label="Telefone Celular" size="small" variant="outlined" value={cellphone} onChange={changeField} fullWidth required />
        </li>
        <li>
          <FormControlLabel control={ <Switch required checked={acceptedRegulation} onClick={changeField} id="acceptedRegulation" color="primary" /> } label="Optin Termos e Regulamento" labelPlacement="End" />
        </li>
      </ul>
      
    </Layout>
  );
};
function mapStateToProps(state) {
  return {
    cnpj: state.corpID.fields.cnpj,
    companyName: state.corpBasicInfo.fields.companyName,
    fantasyName: state.corpBasicInfo.fields.fantasyName,
    cpf: state.corpBasicInfo.fields.cpf,
    email: state.corpBasicInfo.fields.email,
    phone: state.corpBasicInfo.fields.phone,
    cellphone: state.corpBasicInfo.fields.cellphone,
    acceptedRegulation: state.corpBasicInfo.fields.acceptedRegulation,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    changeCnpjUserInfo(userInfo) {
      const action = changeCnpjUserInfo(userInfo);
      dispatch(action);
    },
    changeBusinessInfo(userInfo) {
      const action = changeBusinessInfo(userInfo);
      console.log(action); 
      dispatch(action);
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(StepTwo);
