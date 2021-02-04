// External Libraries 
import React, { useState } from 'react';
import { TextField, FormControl } from '@material-ui/core';

const CNPJ = (props) => {
    const [currentMessage, setCurrentMessage] = useState();
    const [value, setValue] = useState(props.value);
    const [invalid, setInvalid] = useState(false);
    const [requiredSymbol, setRequiredSymbol] = useState(props.required ? props.requiredSymbol || '*' : '');

    const [errorMessages, setErrorMessages] = useState({
        invalid: props.invalidMessage || `Número de ${props.label} inválido.`,
        required: props.requiredMessage || `O campo ${props.label} é obrigatório.`,
        valid: props.validMessage || '',
    });

    const onChange = (e) => {
        setValue(maskCNPJ(e.target.value));
        props.onChange(e);
    }
    const onBlur = ({ target: { value } }) => {
        // incompleto
        if (value.length > 0 && value.length < 18) {
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
        if (value.length === 18) {
            const ret = validateCNPJ(value);
            if (ret) {
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
                id={props.id}
                name={props.name || props.id}
                className={props.className}
                style={props.style}

                label={(props.label + ' ' + requiredSymbol) || 'CNPJ'}
                variant={props.variant || "outlined"}
                size={props.size || 'small'}

                error={invalid}
                helperText={currentMessage}
                required={props.required}
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

const validateCNPJ = (v) => {
    const cnpj = v.replace(/[^\d]+/g, '');

    if (cnpj === '') return false;
    if (cnpj.length !== 14) return false;

    // Elimina CNPJs invalidos conhecidos
    if (cnpj === "00000000000000" ||
        cnpj === "11111111111111" ||
        cnpj === "22222222222222" ||
        cnpj === "33333333333333" ||
        cnpj === "44444444444444" ||
        cnpj === "55555555555555" ||
        cnpj === "66666666666666" ||
        cnpj === "77777777777777" ||
        cnpj === "88888888888888" ||
        cnpj === "99999999999999") {
        return false;
    }

    // Valida DVs
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)) {
        return false;
    }

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== parseInt(digitos.charAt(1))) {
        return false;
    }

    return true;
}
const maskCNPJ = (v) => {
    v = v.replace(/\D/g, "")
    v = v.replace(/^(\d{2})(\d)/, "$1.$2")
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    v = v.replace(/\.(\d{3})(\d)/, ".$1/$2")
    v = v.replace(/(\d{4})(\d)/, "$1-$2")
    return v.substring(0, 18)
}
export default CNPJ;
