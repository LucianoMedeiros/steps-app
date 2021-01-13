// External Libraries 
import React, { useState } from "react";
import { connect } from 'react-redux';
import { DropzoneArea } from 'material-ui-dropzone'

// External Handlers
import { changelogoUserInfo } from '../store/actions/logoUserActions';

// Components
import Layout from './../layout'
import ButtonNext from "./components/navButtons/next";
import ButtonPrev from "./components/navButtons/prev";

const StepFive = (props) => {

  // Local States - Fields
  const [logo, setLogo] = useState(props.logo);
  console.log('initial props',props.logo);

  // Local Handlers
  const changeField = (files) => {
    if (files) {
      setLogo(files);
    }
    else{
      setLogo('empty');
    }
  };
  
  function customClick() {
    props.changelogoUserInfo({ logo });
    return true;
  }

  return (
    <Layout 
      header={<h1>Step 5</h1>} 
      footer={
        <>
          <ButtonPrev onClick={customClick}>Voltar</ButtonPrev>
          <ButtonNext onClick={customClick}>Continuar</ButtonNext>
        </>
      }
    >
      <ul className="form-items">
        <li>
          <DropzoneArea
            onChange={changeField} 
            filesLimit={1} 
            maxFileSize={2097152} //2MB
            acceptedFiles={['image/*']} 
            initialFiles={props.logo}
          />
        </li>
      </ul>
    </Layout>
  );
};

function mapStateToProps(state) {
  return {
    logo: state.corpLogoInfo.fields.logo,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    changelogoUserInfo(logo) {
      const action = changelogoUserInfo(logo);
      dispatch(action);
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(StepFive);
