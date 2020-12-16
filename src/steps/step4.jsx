import React from "react";
import { TextField, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, InputLabel, Select, Switch } from '@material-ui/core';

import Layout from './../layout'
import ButtonNext from "./components/navButtons/next";
import ButtonPrev from "./components/navButtons/prev";

const stepFour = (props) => {
  return (
    <Layout 
      header={<h1>Step 4</h1>} 
      footer={
        <>
          <ButtonPrev>Voltar</ButtonPrev>
          <ButtonNext>Continuar</ButtonNext>
        </>
      }
    >
    <ul className="form-items">
        <li>
          <FormControl variant="outlined" size="small">
            <InputLabel htmlFor="ramoAtuacao">Ramo de atuação</InputLabel>
            <Select
              native
              // value={state.age}
              // onChange={handleChange}
              label="Estado"
              inputProps={{
                name: 'ramoAtuacao',
                id: 'ramoAtuacao',
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
        <li>
          <TextField id="description" label="Descrição" size="small" multiline rows={4} variant="outlined" />
        </li>
        <li>
          <FormControlLabel
            control={
              <Switch
                // checked={state.checkedB}
                // onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Possui Loja virtual?"
            labelPlacement="Start"
          />
        </li>
        <li>
          <TextField id="ecommerce" label="Qual é o endereço dela?" size="small" multiline rows={4} variant="outlined" />
        </li>
        <li>
          <FormControl component="fieldset">
            <FormLabel component="legend">qual benefício você pretende oferecer para os participantes?</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={0}>
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
export default stepFour;
