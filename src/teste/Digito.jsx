import React, {useEffect, useState} from 'react';

const Digito = (props) => {
    return (
        <input 
            id={props.id}
            type="text"
            className={'digito ' + props.className} 
            onChange={props.onChange}
            onKeyPress={props.onKeyPress}
            onKeyUp={props.onKeyUp}
            maxLength={1}
            />
    );
}

export default Digito;
