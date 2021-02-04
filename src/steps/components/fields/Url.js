// External Libraries 
import React, { useState } from 'react';
import { TextField, FormControl } from '@material-ui/core';

const Url = (props) => {
    const [currentMessage, setCurrentMessage] = useState();
    const [value, setValue] = useState(props.value);
    const [invalid, setInvalid] = useState(false);
    const [requiredSymbol, setRequiredSymbol] = useState(props.required ? props.requiredSymbol || '*' : '');

    const [errorMessages, setErrorMessages] = useState({
        invalid: props.invalidMessage || `Url inválida.`,
        required: props.requiredMessage || `O campo ${props.label} é obrigatório.`,
        valid: props.validMessage || '',
    });

    const onChange = (e) => {
        setValue(e.target.value);
        props.onChange(e);
    }
    const onBlur = ({ target: { value } }) => {
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
        // url
        if (validateUrl(value)) {
            setInvalid(false);
            setCurrentMessage(errorMessages.valid);
        }
        else {
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

                label={(props.label + ' ' + requiredSymbol) || 'no label'}
                variant={props.variant || "outlined"}
                size={props.size || 'small'}

                error={invalid}
                helperText={currentMessage}
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

const validateUrl = (url) => {
    return /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi.test(url)
}
export default Url;
