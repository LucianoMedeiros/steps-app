// External Libraries 
import React, {useState} from "react";
import { connect } from 'react-redux';
import { TextField, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, InputLabel, Select, Switch } from '@material-ui/core';

// External Handlers
import { changeBusinessStoreInfo } from '../store/actions/businessInfoStoreActions';

// Components
import Layout from './../layout'
import ButtonNext from "./components/navButtons/next";
import ButtonPrev from "./components/navButtons/prev";

const StepFour = (props) => {

  // Local States - Fields
  const [businessArea, setBusinessArea] = useState(props.businessArea);
  const [descriptionBusiness, setDescriptionBusiness] = useState(props.descriptionBusiness);
  const [hasEcommerce, setHasEcommerce] = useState(props.hasEcommerce);
  const [urlEcommerce, setUrlEcommerce] = useState(props.urlEcommerce);
  const [benefit, setBenefit] = useState(props.benefit);

  // Local Handlers
  const changeField = ({ target: { name, value } }) => {
    switch (name) {
      case 'businessArea':        setBusinessArea(value);         break;
      case 'descriptionBusiness': setDescriptionBusiness(value);  break;
      case 'hasEcommerce':        setHasEcommerce(!hasEcommerce); break;
      case 'urlEcommerce':        setUrlEcommerce(value);         break;
      case 'benefit':             setBenefit(value);              break;
      default: console.log('default');
    }
  };

  function customClick() {
    props.changeBusinessStoreInfo({ businessArea, descriptionBusiness, hasEcommerce, urlEcommerce, benefit });
    return true;
  }


  return (
    <Layout 
      header={<h1>Step 4</h1>} 
      footer={
        <>
        <ButtonPrev onClick={customClick}>Voltar</ButtonPrev>
        <ButtonNext onClick={customClick}>Continuar</ButtonNext>
        </>
      }
    >
    <ul className="form-items">
        <li>
          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel htmlFor="businessArea">Ramo de atuação</InputLabel>
            <Select
              native
              value={businessArea}
              onChange={changeField}
              label="Ramo de atuação"
              inputProps={{
                name: 'businessArea',
              }}
            >
              <option aria-label="None" value="" />
              <option value={"COM"}>Comércio</option>
              <option value={"SER"}>Serviços</option>
              <option value={"IND"}>Indústria</option>
            </Select>
          </FormControl> 
        </li>
        <li>
          <TextField name="descriptionBusiness" label="Descrição" size="small" multiline rows={4} variant="outlined" value={descriptionBusiness} onChange={changeField} fullWidth />
        </li>
        <li>
          <FormControlLabel
            control={
              <Switch
                value={hasEcommerce}
                checked={hasEcommerce}
                onChange={changeField}
                name="hasEcommerce"
                color="primary"
              />
            }
            label="Possui Loja virtual?"
            labelPlacement="Start"
          />
        </li>
        <li>
          <TextField name="urlEcommerce" label="Qual é o endereço dela?" size="small" variant="outlined" value={urlEcommerce} onChange={changeField} fullWidth />
        </li>
        <li>
          <FormControl component="fieldset">
            <FormLabel component="legend">qual benefício você pretende oferecer para os participantes?</FormLabel>
            <RadioGroup aria-label="benefit" name="benefit" value={benefit} onChange={changeField}>
              <FormControlLabel value="fisico" control={<Radio size="small" />} label="Ofertas na minha loja física" />
              <FormControlLabel value="virtual" control={<Radio size="small" />} label="Ofertas na minha loja virtual" />
              <FormControlLabel value="ambos" control={<Radio size="small" />} label="Ofertas na minha loja física e virtual" />
            </RadioGroup>
          </FormControl>
        </li>
      </ul>
      
    </Layout>
  );
};

function mapStateToProps(state) {
  return {
    businessArea: state.corpStoreInfo.fields.businessArea,
    descriptionBusiness: state.corpStoreInfo.fields.descriptionBusiness,
    hasEcommerce: state.corpStoreInfo.fields.hasEcommerce,
    urlEcommerce: state.corpStoreInfo.fields.urlEcommerce,
    benefit: state.corpStoreInfo.fields.benefit,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    changeBusinessStoreInfo(storeInfo) {
      const action = changeBusinessStoreInfo(storeInfo);
      dispatch(action);
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(StepFour);
