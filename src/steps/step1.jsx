// External Libraries 
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TextField, Switch, FormControl, FormControlLabel } from '@material-ui/core';

// External Handlers
import { changeUserInfo } from '../store/actions/formUserActions';

// Components
import Layout from './../layout'
import ButtonNext from './components/navButtons/next';

const StepOne = (props) => {

  // Local States
  const [cnpj, setCnpj] = useState(props.cnpj);
  const [razaoSocial, setRazao] = useState(props.razaoSocial);
  
  // Local Handlers
  const changeField = ({ target: { value } }) => {
    setCnpj(value);
  };
  
  function customClick() {
    props.changeUserInfo({ cnpj, razaoSocial });
    return true;
  }

  return (
    <Layout header={<h1>Step 1</h1>} footer={<ButtonNext onClick={customClick}>Continuar</ButtonNext>}>
      <ul className="form-items">
        <li>
          <FormControl fullWidth>
            <TextField id="cnpj" label="CNPJ" size="small" variant="outlined" required onChange={changeField} value={cnpj} />
          </FormControl>
        </li>
        <li>
          <FormControlLabel fullWidth control={ <Switch name="checkin" color="primary" /> } label="Optin com switch" labelPlacement="Start" />
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
export default connect(mapStateToProps, mapDispatchToProps)(StepOne);
