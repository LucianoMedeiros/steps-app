// External Libraries 
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, FormControlLabel } from '@material-ui/core';

// External Handlers
import { changeCnpjUserInfo } from '../store/actions/cnpjUserActions';

// Components
import Layout from './../layout'
import ButtonNext from './components/navButtons/next';
import { CNPJ } from './components/fields'

const StepOne = (props) => {

    // Local States
    const [cnpj, setCnpj] = useState(props.cnpj);
    const [isClient, setIsClient] = useState(false);

    // Local Handlers
    const changeField = ({ target: { id, value } }) => {
        switch (id) {
            case 'cnpj': setCnpj(value); break;
            case 'isClient': setIsClient(!isClient); break;
            default: console.log('default');
        }
    };

    function customClick() {
        props.changeCnpjUserInfo({ cnpj });
        return true;
    }

    const validation = cnpj && isClient;

    useEffect(() => {
        console.log(
            'validation: ' + validation +
            '\ncnpj: ' + CNPJ +
            '\nisClient: ' + isClient
        );
    }, [validation]);
    return (
        <Layout header={<h1>Step 1</h1>} footer={<ButtonNext onClick={customClick}>Continuar</ButtonNext>}>
            <ul className="form-items">
                <li>
                    <CNPJ label="CNPJ" id="cnpj" onChange={changeField} value={cnpj} />
                </li>
                <li>
                    <FormControlLabel
                        fullWidth
                        control={
                            <Switch
                                id="isClient"
                                name="isClient"
                                color="primary"
                                value={isClient}
                                checked={isClient}
                                onChange={changeField}
                            />
                        }
                        label="Já sou cliente"
                        labelPlacement="Start"
                    />
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
