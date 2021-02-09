// External Libraries 
import React, { useState } from 'react';
import { TextField, FormControl } from '@material-ui/core';

const Celular = (props) => {
    const [currentMessage, setCurrentMessage] = useState();
    const [value, setValue] = useState(props.value);
    const [invalid, setInvalid] = useState(false);
    const [requiredSymbol, setRequiredSymbol] = useState(props.required ? props.requiredSymbol || '*' : '');

    const [errorMessages, setErrorMessages] = useState({
        invalid: props.invalidMessage || `Número de ${props.label} inválido.`,
        required: props.requiredMessage || `O campo ${props.label} é obrigatório.`,
        valid: props.validMessage || '',
    });

    const attrs = props.required ? { required: true } : '';

    const onChange = (e) => {
        if (e.target.value.length >= 0 && e.target.value.length < 16) {
            setValue(maskCelular(e.target.value));
        }
        if (e.target.value[5] != 9) {
            setInvalid(true);
            setCurrentMessage(errorMessages.invalid);
        }
        else {
            setInvalid(false);
            setCurrentMessage(errorMessages.valid);
        }
        e.target.value = maskCelular(e.target.value);
        props.onChange(e);
    }
    const onBlur = ({ target: { value } }) => {
        // incompleto
        if (value.length > 0 && value.length < 15) {
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
        if (value.length === 15) {
            setInvalid(false);
            setCurrentMessage(errorMessages.valid);
        }
        if (value[5] != 9) {
            setInvalid(true);
            setCurrentMessage(errorMessages.invalid);
        }
    }

    return (
        <FormControl fullWidth>
            <TextField
                id={props.id}
                name={props.name || props.id}
                className={props.className}
                style={props.style}

                label={(props.label + ' ' + requiredSymbol) || 'Celular'}
                variant={props.variant || "outlined"}
                size={props.size || 'small'}

                error={invalid}
                helperText={currentMessage}
                {...attrs}
                disabled={props.disabled}

                onBlur={onBlur}
                onChange={onChange}
                value={value}

                aria-label={props.ariaLabel}
                tabIndex={props.tabIndex}

            />
        </FormControl>
    )
}

const maskCelular = (v) => {
    v = v.replace(/\D/g, ''); //Remove tudo o que não é dígito
    v = v.replace(/^(\d{2})(\d)/g, '($1) $2'); //Coloca parênteses em volta dos dois primeiros dígitos
    v = v.replace(/(\d)(\d{4})$/, '$1-$2'); //Coloca hífen entre o quarto e o quinto dígitos
    return v.substring(0, 15);
}
export default Celular;
