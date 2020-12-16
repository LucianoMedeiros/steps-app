import { ADD_CNPJ_INFO } from '../actions/actionTypes';

const initialState = {
  fields: {
    cnpj: null,
  },
};

export default function formUserReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_CNPJ_INFO:
      return { ...state, fields: action.payload };
    default:
      return state;
  }
}
