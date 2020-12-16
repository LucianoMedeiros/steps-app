// External Libraries 
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TextField, Switch, FormControl, FormControlLabel } from '@material-ui/core';

// External Handlers
import { changeCnpjUserInfo } from '../store/actions/cnpjUserActions';

// Components
import Layout from './../layout'
import ButtonNext from './components/navButtons/next';

const StepOne = (props) => {

  // Local States
  const [cnpj, setCnpj] = useState(props.cnpj);
  
  // Local Handlers
  const changeField = ({ target: { value } }) => {
    setCnpj(value);
  };
  
  function customClick() {
    props.changeCnpjUserInfo({ cnpj });
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
    cnpj: state.corpID.fields.cnpj,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    changeCnpjUserInfo(userInfo) {
      const action = changeCnpjUserInfo(userInfo);
      dispatch(action);
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(StepOne);
