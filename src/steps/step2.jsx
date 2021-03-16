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
import { CNPJ, CPF, Telefone, Celular, Email } from './components/fields'


const StepTwo = (props) => {

    // Local States - Fields
    const [cnpj, setCnpj] = useState(props.cnpj);
    const [companyName, setCompanyName] = useState(props.companyName);
    const [fantasyName, setFantasyName] = useState(props.fantasyName);
    const [cpf, setCpf] = useState(props.cpf);
    const [email, setEmail] = useState(props.email);
    const [phone, setPhone] = useState(props.phone);
    const [cellphone, setCellphone] = useState(props.cellphone);
    const [acceptedRegulation, setAcceptedRegulation] = useState(props.acceptedRegulation);

    // Local Handlers
    const changeField = ({ target: { id, value } }) => {
        switch (id) {
            case 'cnpj': setCnpj(value); break;
            case 'companyName': setCompanyName(value); break;
            case 'fantasyName': setFantasyName(value); break;
            case 'cpf': setCpf(value); break;
            case 'email': setEmail(value); break;
            case 'phone': setPhone(value); break;
            case 'cellphone': setCellphone(value); break;
            case 'acceptedRegulation': setAcceptedRegulation(!acceptedRegulation); break;
            default: console.log('default');
        }
    };

    function customClick() {
        props.changeCnpjUserInfo({ cnpj });
        props.changeBusinessInfo({ companyName, fantasyName, cpf, email, phone, cellphone, acceptedRegulation });
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
                    <CNPJ label="CNPJ" id="cnpj" onChange={changeField} value={cnpj} />
                </li>
                <li>
                    <TextField id="companyName" label="Razão Social" size="small" variant="outlined" value={companyName} onChange={changeField} fullWidth required />
                </li>
                <li>
                    <TextField id="fantasyName" label="Nome Fantasia" size="small" variant="outlined" value={fantasyName} onChange={changeField} fullWidth required />
                </li>
                <li>
                    <CPF label="CPF do Sócio" id="cpf" onChange={changeField} value={cpf} />
                </li>
                <li>
                    <Email id="email" type="email" label="Email" value={email} onChange={changeField} required />
                </li>
                <li>
                    <Telefone label="Telefone Fixo" id="phone" onChange={changeField} value={phone} />
                </li>
                <li>
                    <Celular id="cellphone" label="Celular" value={cellphone} onChange={changeField} />
                </li>
                <li>
                    <FormControlLabel control={<Switch required checked={acceptedRegulation} onClick={changeField} id="acceptedRegulation" color="primary" />} label="Optin Termos e Regulamento" labelPlacement="End" />
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
