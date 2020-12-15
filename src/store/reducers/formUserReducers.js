import { ADD_USER_INFO } from '../actions/actionTypes';

const initialState = {
  fields: {
    cnpj: null,
    razaoSocial: null,
  },
};

export default function formUserReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_USER_INFO:
      return { ...state, fields: action.payload };
    default:
      return state;
  }
}
