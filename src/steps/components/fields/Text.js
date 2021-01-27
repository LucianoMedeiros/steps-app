import React, { useState } from 'react';
import { TextField, FormControl } from '@material-ui/core'; 

const Text = (props) => {
    const [currentMessage, setCurrentMessage] = useState();
    const [value, setValue] = useState(props.value);
    const [invalid, setInvalid] = useState(false);
    const [requiredSymbol, setRequiredSymbol] = useState( props.required ? props.requiredSymbol || '*' : '' );

    const [errorMessages, setErrorMessages] = useState({
        minLength: props.minLengthMessage || `O campo ${props.label} precisa ter no mínimo ${props.minLength} dígito.`,
        required: props.requiredMessage || `O campo ${props.label} é obrigatório.`,
        valid: props.validMessage || '',

    });

    const onChange = ({ target: { value }}) => { 
        if (props.isNumeric) {
            const num = removeLetters(value);
            console.log('numeric', num);
            setValue(num);
        }
        if(props.maxLength) {
            setValue(value.substring(0, props.maxLength));
        }
    }
    const onBlur = ({ target: { value }}) => { 
        // incompleto
        if (props.minLength && value.length < props.minLength) {
            setInvalid(true);
            setCurrentMessage(errorMessages.minLength);
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
    }

    return (
        <FormControl fullWidth>
            <TextField 
                id={ props.id }
                name={ props.name || props.id }
                className={ props.className } 
                style={ props.style }
                
                label={ (props.label + ' ' + requiredSymbol ) || 'no label' } 
                variant={ props.variant || "outlined" }
                size={ props.size || 'small' } 
                
                error={ invalid }
                helperText={ currentMessage }
                disabled={ props.disabled }                
                
                onBlur={ onBlur }
                onChange={ props.onChange, onChange }
                value={ value }
                
                aria-label={ props.ariaLabel }                
                tabIndex={ props.tabIndex }   
                
            />
        </FormControl>
    );
}

const removeLetters = (v) => {
    v = v.replace(/\D/g, '');
    return v;
}
export default Text;
