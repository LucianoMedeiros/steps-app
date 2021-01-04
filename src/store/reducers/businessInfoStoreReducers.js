import { ADD_BUSINESS_STORE_INFO } from '../actions/actionTypes';

const initialState = {
  fields: {
    businessArea: null,
    descriptionBusiness: null,
    hasEcommerce: false,
    urlEcommerce: null,
    benefit: 0,
  },
};

export default function formUserReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_BUSINESS_STORE_INFO:
      return { ...state, fields: action.payload };
    default:
      return state;
  }
}
