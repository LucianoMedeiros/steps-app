import React, { useState, useRef }  from 'react';
import Digito  from "./Digito";
import './teste.css';

const SMS = () => {
    const [code, setCode] = useState([]);
    const [resultCode, setResultCode] = useState([]);
    
    const onKeyUp = () => {
        setResultCode(code.join(''));
    }

    const onChange = ({target: {id, value, nextSibling, previousSibling, classList}}) => {
        if(value.length === 0) {
            if(previousSibling != null) { 
                classList.remove('valid');
                previousSibling.focus(); 
            }
        }
        else {
            if(nextSibling != null) {
                classList.add('valid');
                nextSibling.focus();
            } 
        }
        
        const item = id.slice(-1) - 1;
        let newCode = [...code];
        newCode[item] = value;
        setCode(newCode);
    }
    
    return (
        <>
            <div style={{width: "400px", padding: "30px 30px 0px 30px"}}>
                <input type="text" value={resultCode} disabled maxLength={6} name="entrada" id="entrada" style={{width: "100%", fontFamily: "monospace", fontSize: "30px"}} onChange={onChange} />
            </div>
            <div style={{display: "flex", justifyContent: "space-between", width: "400px", padding: "30px"}}>
                <Digito id={"dig1"} onChange={onChange} onKeyUp={onKeyUp}/>
                <Digito id={"dig2"} onChange={onChange} onKeyUp={onKeyUp}/>
                <Digito id={"dig3"} onChange={onChange} onKeyUp={onKeyUp}/>
                <Digito id={"dig4"} onChange={onChange} onKeyUp={onKeyUp}/>
                <Digito id={"dig5"} onChange={onChange} onKeyUp={onKeyUp}/>
                <Digito id={"dig6"} onChange={onChange} onKeyUp={onKeyUp}/>
            </div>
        </>
    );
}

export default SMS;
