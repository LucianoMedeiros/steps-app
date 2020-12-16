import { ADD_BUSINESS_INFO } from '../actions/actionTypes';

const initialState = {
  fields: {
    companyName: null,
    fantasyName: null,
    cpf: null,
    email: null,
    phone: null,
    cellphone: null,
    acceptedRegulation: false
  },
};

export default function formUserReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_BUSINESS_INFO:
      return { ...state, fields: action.payload };
    default:
      return state;
  }
}
