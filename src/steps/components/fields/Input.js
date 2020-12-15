import React from 'react';

const Input = (props) => {
  return (
    <>
      {props.type === 'checkbox' ? (
        <div>
          <input
            id={props.id}
            type="checkbox"
            value={props.value}
            onChange={props.onChange}
          />
          <label htmlFor={props.id}>{props.label}</label>
        </div>
      ) : (
        <div>
          <label htmlFor={props.id}>{props.label}</label>
          <input
            id={props.id}
            type="text"
            value={props.value}
            onChange={props.onChange}
          />
        </div>
      )}
    </>
  );
};

export default Input;
