// External Libraries 
import React, { useState } from 'react';
import { TextField, FormControl } from '@material-ui/core';

const CPF = (props) => {
    const [currentMessage, setCurrentMessage] = useState();
    const [value, setValue] = useState(props.value);
    const [invalid, setInvalid] = useState(false);
    const [requiredSymbol, setRequiredSymbol] = useState( props.required ? props.requiredSymbol || '*' : '' );

    const [errorMessages, setErrorMessages] = useState({
        invalid: props.invalidMessage || `Número de ${props.label} inválido.`,
        required: props.requiredMessage || `O campo ${props.label} é obrigatório.`,
        valid: props.validMessage || '',
    });

    const onChange = ({ target: { value } }) => {
        setValue(maskCPF( value ));
    }
    const onBlur = ({ target: { value } }) => {
        // incompleto
        if (value.length > 0 && value.length < 14) {
            setInvalid(true);
            setCurrentMessage(errorMessages.invalid);
        }
        // vazio
        if (value.length === 0) {
            if (props.required) {
                setInvalid(true);   
                setCurrentMessage(errorMessages.required);
            }
            else {
                setInvalid(false);
                setCurrentMessage(errorMessages.valid);
            }
            return;
        }
        if (value.length === 14) {
            const ret = validateCPF(value);
            if(ret) {
                setInvalid(false);
                setCurrentMessage(errorMessages.valid);
            }
            else {
                setInvalid(true);
                setCurrentMessage(errorMessages.invalid);
            }
        }
    }

    return (
        <FormControl fullWidth>
            <TextField 
                id={ props.id }
                name={ props.name || props.id }
                className={ props.className } 
                value={ value }
                style={ props.style }

                label={ (props.label + ' ' + requiredSymbol ) || 'CPF' } 
                variant={ props.variant || "outlined" }
                size={ props.size || 'small' } 

                error={ invalid }
                helperText={ currentMessage }
                required={ props.required }

                onBlur={ onBlur }

                onChange={ props.onChange, onChange }
                disabled={ props.disabled }                

                aria-label={ props.ariaLabel }                
                tabIndex={ props.tabIndex }                

                />
        </FormControl>
    )
}

const validateCPF = (v) => {
    const cpf = v.replace(/[^\d]+/g, '');

    if (cpf === '') return false;
    if (cpf.length !== 11) return false;

    // Elimina CPFs invalidos conhecidos	
    if (cpf === "00000000000" ||
        cpf === "11111111111" ||
        cpf === "22222222222" ||
        cpf === "33333333333" ||
        cpf === "44444444444" ||
        cpf === "55555555555" ||
        cpf === "66666666666" ||
        cpf === "77777777777" ||
        cpf === "88888888888" ||
        cpf === "99999999999") {
        return false;
    }

    // Valida 1o digito	
    let add = 0;
    for (var i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11)
        rev = 0;
    if (rev !== parseInt(cpf.charAt(9)))
        return false;
    // Valida 2o digito	
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11)
        rev = 0;
    if (rev !== parseInt(cpf.charAt(10)))
        return false;
    return true;
}
const maskCPF = (v) => {
    v = v.replace(/\D/g, "")
    v = v.replace(/(\d{3})(\d)/, "$1.$2")
    v = v.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    v = v.replace(/(\d{3})(\d)/, "$1-$2")
    return v.substring(0, 14)
}
export default CPF;
