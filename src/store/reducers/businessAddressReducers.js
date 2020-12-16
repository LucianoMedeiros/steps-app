import { ADD_ADDRESS_INFO } from '../actions/actionTypes';

const initialState = {
  fields: {
    storeName: null,
    zipCode: null,
    street: null,
    number: null,
    complement: null,
    district: null,
    city: null,
    uf: null,
  },
};

export default function formUserReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_ADDRESS_INFO:
      return { ...state, fields: action.payload };
    default:
      return state;
  }
}
