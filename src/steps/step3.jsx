import React, {useState} from "react";
import { TextField, FormControl, InputLabel, Select } from '@material-ui/core';

import Layout from './../layout'
import ButtonNext from "./components/navButtons/next";
import ButtonPrev from "./components/navButtons/prev";

const StepThree = (props) => {

  // Local States - Fields
  const [storeName, setStoreName] = useState(props.storeName);
  const [zipCode, setZipCode] = useState(props.zipCode);
  const [street, setStreet] = useState(props.street);
  const [number, setNumber] = useState(props.number);
  const [complement, setComplement] = useState(props.complement);
  const [district, setDistrict] = useState(props.district);
  const [city, setTelCity] = useState(props.city);
  const [uf, setUf] = useState(props.uf);


  // Local Handlers
  const changeField = ({ target: { id, value } }) => {
    switch (id) {
      case 'storeName': setStoreName(value);                  break;
      case 'zipCode':   setZipCode(value);        break;
      case 'street':  setStreet(value); break;
      case 'number':           setNumber(value);          break;
      case 'complement':         setComplement(value);        break;
      case 'district':       setDistrict(value);      break;
      case 'city':    setTelCity(value);   break;
      case 'uf':    setUf(value);   break;
      default: console.log('default');
    }
  };


  return (
    <Layout 
      header={<h1>Step 3</h1>} 
      footer={
        <>
          <ButtonPrev>Voltar</ButtonPrev>
          <ButtonNext>Continuar</ButtonNext>
        </>
      }
    >
    <ul className="form-items">
        <li>
          <TextField id="storeName" label="Nome da Unidade" size="small" variant="outlined" value={storeName} onChange={changeField} fullWidth required />
        </li> 
        <li>
          <TextField id="zipCode" label="CEP" size="small" variant="outlined" value={zipCode} onChange={changeField} fullWidth required />
        </li> 
        <li>
          <TextField id="street" label="Rua" size="small" variant="outlined" value={street} onChange={changeField} fullWidth required />
        </li> 
        <li>
          <TextField id="number" label="Número" size="small" variant="outlined" value={number} onChange={changeField} fullWidth required />
        </li> 
        <li>
          <TextField id="complement" label="Complemento" size="small" variant="outlined" value={complement} onChange={changeField} fullWidth />
        </li> 
        <li>
          <TextField id="district" label="Bairro" size="small" variant="outlined" value={district} onChange={changeField} fullWidth required />
        </li> 
        <li>
          <TextField id="city" label="Cidade" size="small" variant="outlined" value={city} onChange={changeField} fullWidth required />
        </li>  
        <li>
          <FormControl variant="outlined" size="small">
            <InputLabel htmlFor="uf">Estado</InputLabel>
            <Select
              native
              // value={state.age}
              // onChange={handleChange}
              label="Estado"
              inputProps={{
                name: 'uf',
                id: 'uf',
              }}
            >
              <option aria-label="None" value="" />
              <option value={"SP"}>SP</option>
              <option value={"RJ"}>RJ</option>
              <option value={"MG"}>MG</option>
              <option value={"ES"}>ES</option>
            </Select>
          </FormControl>        
        </li>   
      </ul>
      
    </Layout>
  );
};
export default StepThree;
