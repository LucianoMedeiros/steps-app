// External Libraries 
import React, { useState } from 'react';
import { TextField, MenuItem, InputLabel, FormControl, Select } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

const Estado = (props) => {
    const [currentMessage, setCurrentMessage] = useState();
    const [value, setValue] = useState(props.value);
    const [invalid, setInvalid] = useState(false);
    const [requiredSymbol, setRequiredSymbol] = useState(props.required ? props.requiredSymbol || '*' : '');

    const [errorMessages, setErrorMessages] = useState({
        required: props.requiredMessage || `O campo ${props.label} é obrigatório.`,
        valid: props.validMessage || '',
    });

    const renderDivisionOptions = () => {
        return UF_List.map((option, i) => {
            return (
                <MenuItem
                    key={i}
                    id={option.id}
                    value={props.abbreviation ? option.abbreviation : option.name}
                >
                    { props.abbreviation ? option.abbreviation : option.name}
                </MenuItem>
            );
        });
    }

    const onChange = (e) => {
        setValue(e.target.value);
        console.log(e.target);
        // e.target.id = e.target.id.split('-')[0];
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
        else {
            setInvalid(false);
            setCurrentMessage(errorMessages.valid);
        }
    }
    return (
        <FormControl fullWidth size={'small'}>
            <InputLabel id="uf-label">Estado</InputLabel>
            <Select
                labelId="uf-label"
                id={props.id}
                name={props.name || props.id}
                value={props.value}
                variant={props.variant || 'outlined'}
                onChange={onChange}
                onBlur={onBlur}

            >
                {renderDivisionOptions()}
            </Select>
        </FormControl>
        // <Autocomplete
        //     id={props.id}
        //     name={props.name || props.id}
        //     className={props.className}
        //     style={props.style}
        //     value={value}

        //     options={UF_List}
        //     disabled={props.disabled}
        //     getOptionLabel={(option) => option.name}
        //     renderOption={(option) => (
        //         <React.Fragment>
        //             { props.abbreviation ? option.abbreviation : option.name}
        //         </React.Fragment>
        //     )}
        //     onChange={onChange}
        //     onBlur={onBlur}
        //     renderInput={(params) => (
        //         <TextField
        //             {...params}
        //             label={(props.label + ' ' + requiredSymbol) || 'Escolha o estado'}
        //             variant={props.variant || "outlined"}
        //             size={props.size || 'small'}
        //             error={invalid}
        //             helperText={currentMessage}
        //             disabled={props.disabled}
        //         />
        //     )}
        // />
    )
}

export const UF_List = [
    { id: 1, name: "Acre", abbreviation: "AC" },
    { id: 2, name: "Alagoas", abbreviation: "AL" },
    { id: 3, name: "Amapá", abbreviation: "AP" },
    { id: 4, name: "Amazonas", abbreviation: "AM" },
    { id: 5, name: "Bahia", abbreviation: "BA" },
    { id: 6, name: "Ceará", abbreviation: "CE" },
    { id: 7, name: "Distrito Federal", abbreviation: "DF" },
    { id: 8, name: "Espírito Santo", abbreviation: "ES" },
    { id: 9, name: "Goiás", abbreviation: "GO" },
    { id: 10, name: "Maranhão", abbreviation: "MA" },
    { id: 11, name: "Mato Grosso", abbreviation: "MT" },
    { id: 12, name: "Mato Grosso do Sul", abbreviation: "MS" },
    { id: 13, name: "Minas Gerais", abbreviation: "MG" },
    { id: 14, name: "Pará", abbreviation: "PA" },
    { id: 15, name: "Paraíba", abbreviation: "PB" },
    { id: 16, name: "Paraná", abbreviation: "PR" },
    { id: 17, name: "Pernambuco", abbreviation: "PE" },
    { id: 18, name: "Piauí", abbreviation: "PI" },
    { id: 19, name: "Rio de Janeiro", abbreviation: "RJ" },
    { id: 20, name: "Rio Grande do Norte", abbreviation: "RN" },
    { id: 21, name: "Rio Grande do Sul", abbreviation: "RS" },
    { id: 22, name: "Rondônia", abbreviation: "RO" },
    { id: 23, name: "Roraima", abbreviation: "RR" },
    { id: 24, name: "Santa Catarina", abbreviation: "SC" },
    { id: 25, name: "São Paulo", abbreviation: "SP" },
    { id: 26, name: "Sergipe", abbreviation: "SE" },
    { id: 27, name: "Tocantins", abbreviation: "TO" },
]
export default Estado;
