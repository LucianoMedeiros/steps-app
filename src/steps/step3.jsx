// External Libraries 
import React, { useState } from "react";
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';

// External Handlers
import { changeAddressInfo } from '../store/actions/businessAddressUserActions';

// Components
import Layout from './../layout'
import ButtonNext from "./components/navButtons/next";
import ButtonPrev from "./components/navButtons/prev";
import { Estado, CEP } from './components/fields'


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
    const changeField = ({ target: { id, name, value, textContent } }) => {
        console.log('fora', name);
        switch (id) {
            case 'storeName': setStoreName(value); break;
            case 'zipCode': setZipCode(value); break;
            case 'street': setStreet(value); break;
            case 'number': setNumber(value); break;
            case 'complement': setComplement(value); break;
            case 'district': setDistrict(value); break;
            case 'city': setTelCity(value); break;
            case 'uf': setUf(value); break;
            default: console.log('default');
        }
    };

    function customClick() {
        props.changeAddressInfo({ storeName, zipCode, street, number, complement, district, city, uf });
        return true;
    }

    return (
        <Layout
            header={<h1>Step 3</h1>}
            footer={
                <>
                    <ButtonPrev onClick={customClick}>Voltar</ButtonPrev>
                    <ButtonNext onClick={customClick}>Continuar</ButtonNext>
                </>
            }
        >
            <ul className="form-items">
                <li>
                    <TextField id="storeName" label="Nome da Unidade" size="small" variant="outlined" value={storeName} onChange={changeField} fullWidth required />
                </li>
                <li>
                    <CEP id="zipCode" label="CEP" value={zipCode} onChange={changeField} />
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
                    <Estado id="uf" label="Estado" onChange={changeField} value={uf} />
                </li>
            </ul>

        </Layout>
    );
};

function mapStateToProps(state) {
    return {
        storeName: state.corpAddressInfo.fields.storeName,
        zipCode: state.corpAddressInfo.fields.zipCode,
        street: state.corpAddressInfo.fields.street,
        number: state.corpAddressInfo.fields.number,
        complement: state.corpAddressInfo.fields.complement,
        district: state.corpAddressInfo.fields.district,
        city: state.corpAddressInfo.fields.city,
        uf: state.corpAddressInfo.fields.uf,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        changeAddressInfo(addressInfo) {
            const action = changeAddressInfo(addressInfo);
            dispatch(action);
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(StepThree);
